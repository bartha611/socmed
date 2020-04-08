import * as express from "express";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { QueryResult } from "pg";
import * as types from "../interfaces/user.types";
import pool from "../pool";
import { Controller } from "../interfaces/controller.interface";

export default class AuthController implements Controller {
  public path = "/api/auth";
  public router = express.Router();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes = (): void => {
    this.router.post(`${this.path}/login`, this.login);
    this.router.post(`${this.path}/register`, this.register);
  };
  private login = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const user: types.Login = req.body;
    const client = await pool.connect();
    try {
      const queryText = `SELECT id, username, password FROM Customer WHERE email = $1`;
      const response: QueryResult<types.UserResult> = await client.query(
        queryText,
        [user.email]
      );
      if (response.rowCount === 0) {
        res.sendStatus(404);
      } else {
        const match = await bcrypt.compare(
          user.password,
          response.rows[0].password
        );
        if (!match) {
          res.sendStatus(403);
        } else {
          const accessToken = jwt.sign(
            { id: response.rows[0].id },
            process.env.JWT_TOKEN,
            { expiresIn: "24h" }
          );
          res.status(200).send({
            user: response.rows[0].username,
            jwt: accessToken,
          });
        }
      }
    } catch (err) {
      res.sendStatus(500);
    } finally {
      client.release();
    }
  };
  private register = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const user: types.Register = req.body;
    let client;
    try {
      client = await pool.connect();
      const queryText = `SELECT * FROM CUSTOMER WHERE email = $1`;
      const response = await client.query(queryText, [user.email]);
      if (response.rowCount !== 0) {
        res.status(403).send("Email has already been used");
      } else {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const result: QueryResult<types.User> = await client.query(
          `INSERT INTO CUSTOMER(username, password, email) VALUES ($1, $2, $3) RETURNING id, username`,
          [user.username, hashedPassword, user.email]
        );
        const accessToken = jwt.sign(
          { id: result.rows[0].id },
          process.env.JWT_TOKEN,
          { expiresIn: "24h" }
        );
        res.status(200).send({
          jwt: accessToken,
          user: result.rows[0].username,
        });
      }
    } catch (err) {
      res.status(500).send(err);
    } finally {
      client.release();
    }
  };
}
