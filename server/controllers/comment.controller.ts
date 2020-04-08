import express, { Request, Response } from "express";
import { QueryResult } from "pg";
import pool from "../pool";
import { Controller } from "../interfaces/controller.interface";
import * as types from "../interfaces/comment.types";
import authenticate from "../middleware/auth.middleware";

export default class CommentController implements Controller {
  public path = "/api/comment";
  public router = express.Router();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes = (): void => {
    this.router.post(this.path, authenticate, this.createComment);
  };
  private createComment = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const comment: types.NewComment = req.body;
    const client = await pool.connect();
    try {
      const queryText = `INSERT INTO COMMENT(comment, userId, postId) VALUES ($1, $2, $3) RETURNING *`;
      const response: QueryResult<types.Comment> = await client.query(
        queryText,
        [comment.comment, req.userId, comment.postId]
      );
      res.status(200).send(response.rows[0]);
    } catch (err) {
      res.status(500).send(err);
    } finally {
      client.release();
    }
  };
}
