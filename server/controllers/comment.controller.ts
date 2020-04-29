import express, { Request, Response } from "express";
import { Controller } from "../interfaces/controller.interface";
import * as types from "../interfaces/comment.types";
import * as likeTypes from "../interfaces/likes.types";
import authenticate from "../middleware/auth.middleware";
import CommentService from "../helpers/commentService";
import commentLikesAuthenticate from "../middleware/commentLikes.middleware";
import LikeService from "../helpers/likeService";

export default class CommentController implements Controller {
  public path = "/api/comment";
  public router = express.Router();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.post(this.path, authenticate, this.createComment);
    this.router.post(
      `${this.path}/like/:id`,
      authenticate,
      commentLikesAuthenticate,
      this.likeComment
    );
    this.router.post(
      `${this.path}/unlike/:id`,
      authenticate,
      commentLikesAuthenticate,
      this.unlikeComment
    );
    this.router.post(this.path, authenticate, commentLikesAuthenticate);
  }
  private async createComment(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const newComment: types.NewComment = req.body;
    const commentService = new CommentService();
    try {
      const response: types.CommentResponse = await commentService.createComment(
        req.userid,
        newComment.postId,
        newComment.comment
      );
      const returnResponse: types.Comment = {
        ...response,
        username: req.username,
        profile_photo: req.profile_photo,
      };
      res.status(200).send(returnResponse);
    } catch (err) {
      res.sendStatus(500);
    }
  }
  private async likeComment(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const { id } = req.params;
    const likeService = new LikeService();
    try {
      const response: likeTypes.CommentLikes = await likeService.likeComment(
        parseInt(id),
        req.userid
      );
      const likeResponse: likeTypes.CommentLikesResponse = {
        ...response,
        username: req.username,
        profile_photo: req.profile_photo,
      };
      res.status(200).send(likeResponse);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  private async unlikeComment(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const { id } = req.params;
    const likeService = new LikeService();
    try {
      await likeService.unlikeComment(parseInt(id));
      res.status(200).send(id);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
