import * as express from "express";
import * as types from "../interfaces/post.types";
import { QueryResult } from "pg";
import pool from "../pool";
import { Controller } from "../interfaces/controller.interface";
import authenticate from "../middleware/auth.middleware";

export default class PostController implements Controller {
  public path = "/api/post";
  public router = express.Router();
  constructor() {
    this.intializeRoutes();
  }
  private intializeRoutes(): void {
    this.router.post(this.path, authenticate, this.createPost);
    this.router.get(this.path, authenticate, this.getAllPosts);
  }
  private createPost = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const post: types.NewPost = req.body;
    const client = await pool.connect();
    try {
      const queryText = `INSERT INTO POST(userid, post) VALUES ($1, $2) RETURNING id, post, likes, userId, createdAt`;
      const response: QueryResult<types.Post> = await client.query(queryText, [
        req.userId,
        post.post,
      ]);
      res.status(200).send(response.rows[0]);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    } finally {
      client.release();
    }
  };
  private getAllPosts = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const client = await pool.connect();
    try {
      const queryText = `SELECT p.id, p.post, p.createdAt, p.likes, 
        (SELECT c.id, c.comment, c.likes, c.updatedAt
          FROM COMMENT c WHERE c.postId = p.id) AS comments
      FROM POST p
      WHERE p.userId = $1`;
      const response = await client.query(queryText, [req.userId]);
      res.status(200).send(response.rows);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error");
    } finally {
      client.release();
    }
  };
}
