import { Request, Response, NextFunction } from "express";
import pool from "../pool";
import * as types from "../interfaces/user.types";
import * as jwt from "jsonwebtoken";

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authToken = req.headers.authorization;
  if (!authToken || authToken.split(" ").length !== 2) {
    res.sendStatus(403);
  } else {
    const token = authToken.split(" ")[1];
    const verificationToken = jwt.verify(
      token,
      process.env.JWT_TOKEN
    ) as types.Token;
    const client = await pool.connect();
    try {
      const response = await client.query(
        `SELECT * FROM CUSTOMER WHERE id = $1`,
        [verificationToken.id]
      );
      if (response.rowCount === 0) {
        res.status(403).send("You are not authorized");
      } else {
        next();
      }
    } catch (err) {
      res.status(500).send(err);
    } finally {
      client.release();
    }
  }
};

export default authenticate;
