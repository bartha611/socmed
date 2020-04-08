import express, { Request, Response } from "express";
import { QueryResult } from "pg";
import pool from "../pool";
import { Controller } from "../interfaces/controller.interface";
import * as types from "../interfaces/comment.types";

export default class CommentController implements Controller {
  public path = "/api/comment";
  public router = express.Router();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes = (): void => {
    this.router.get(this.path, this.getAllComments);
    this.router.post(this.path, this.createComment);
  };
  private getAllComments = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const comment: types.Comment = req.body;
    try {
      const result: QueryResult<types.Comment[]> = await pool.query(
        `SELECT * FROM POST`
      );
      res.status(200).send(result.rows);
    } catch (err) {
      res.status(500).send("Not found");
    }
  };
  private createComment = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const comment: types.NewComment = req.body;
    const client = await pool.connect();
    try {
      const queryText = `INSERT INTO COMMENT(comment, userId, postId) VALUES $1, $2, $3 RETURNING *`;
      const response: QueryResult<types.Comment> = await client.query(
        queryText,
        [comment.comment, req.userId, comment.postId]
      );
      res.status(200).send(response.rows[0]);
    } catch (err) {
      res.sendStatus(500);
    } finally {
      client.release();
    }
  };
}
