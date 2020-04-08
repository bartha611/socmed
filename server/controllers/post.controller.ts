import * as express from "express";
import * as types from "../interfaces/post.types";
import { QueryResult } from "pg";
import pool from "../pool";
import { Controller } from "../interfaces/controller.interface";
import authenticate from "../middleware/auth.middleware";

export default class PostController implements Controller {
  public path = "api/post";
  public router = express.Router();
  constructor() {
    this.intializeRoutes();
  }
  private intializeRoutes(): void {
    this.router.post(this.path, authenticate, this.createPost);
  }
  private createPost = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const post: types.NewPost = req.body;
    const client = await pool.connect();
    try {
      const queryText = `INSERT INTO POST (userid, post) VALUES $1, $2 RETURNING id, post, likes, userId, createdAt`;
      const response: QueryResult<types.Post> = await client.query(queryText, [
        req.userId,
        post.post
      ]);
      res.status(200).send(response.rows[0]);
    } catch (err) {
      res.sendStatus(500);
    } finally {
      client.release();
    }
  };
}
