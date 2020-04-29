import { Request, Response, NextFunction } from "express";
import * as types from "../interfaces/user.types";
import * as jwt from "jsonwebtoken";
import UserService from "../helpers/userService";

export default async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authToken = req.headers.authorization;
  const userService = new UserService();
  if (!authToken || authToken.split(" ").length !== 2) {
    res.sendStatus(403);
  } else {
    try {
      const token = authToken.split(" ")[1];
      const verificationToken = jwt.verify(
        token,
        process.env.JWT_TOKEN
      ) as types.Token;
      const response = await userService.findById(verificationToken.id);
      if (!response) {
        res.status(403).send("You are not authorized");
      } else {
        req.userid = verificationToken.id;
        next();
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
}
