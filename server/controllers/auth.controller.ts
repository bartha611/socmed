import * as express from "express";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import * as types from "../interfaces/user.types";
import { Controller } from "../interfaces/controller.interface";
import UserService from "../helpers/userService";

export default class AuthController implements Controller {
  public path = "/api/auth";
  public router = express.Router();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes = (): void => {
    this.router.post(`${this.path}/login`, this.login);
    this.router.post(`${this.path}/register`, this.register);
    this.router.delete(`${this.path}/:id`, this.delete);
  };
  private delete = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const { id } = req.params;
    try {
      const userService = new UserService();
      await userService.deleteUser(id);
      res.status(200).send(id);
    } catch (err) {
      console.log(err);
      res.status(500).send("error");
    }
  };
  private login = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const user: types.Login = req.body;
    const userService = new UserService();
    try {
      const response: types.User | undefined = await userService.findByEmail(
        user.email
      );
      if (!response) {
        res.status(403).send("Login failure");
      } else {
        const match = await bcrypt.compare(user.password, response.password);
        if (!match) {
          res.status(403).send("Login Failure");
        } else {
          const token = jwt.sign({ id: response.id }, process.env.JWT_TOKEN, {
            expiresIn: "24h",
          });
          res.status(200).send({
            user: response.username,
            jwt: token,
          });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  };
  private register = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const user: types.Register = req.body;
    const userService = new UserService();
    try {
      const response: types.User | undefined = await userService.findByEmail(
        user.email
      );
      if (response) {
        res.sendStatus(403);
      } else {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const userResponse: types.User = await userService.insertUser({
          ...user,
          password: hashedPassword,
        });
        const token = jwt.sign({ id: userResponse.id }, process.env.JWT_TOKEN, {
          expiresIn: "24h",
        });
        res.status(200).send({
          jwt: token,
          user: userResponse.username,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  };
}
