import * as express from "express";
import * as types from "../interfaces/post.types";
import * as likesTypes from "../interfaces/likes.types";
import { Controller } from "../interfaces/controller.interface";
import authenticate from "../middleware/auth.middleware";
import PostService from "../helpers/postService";
import postAuthenticate from "../middleware/post.middleware";
import postLikeAuthenticate from "../middleware/postLikes.middleware";
import LikeService from "../helpers/likeService";

export default class PostController implements Controller {
  public path = "/api/post";
  public router = express.Router();
  constructor() {
    this.intializeRoutes();
  }
  private intializeRoutes(): void {
    this.router.post(this.path, authenticate, this.createPost);
    this.router.get(this.path, authenticate, this.getAllPosts);
    this.router.delete(
      `${this.path}/:id`,
      authenticate,
      postAuthenticate,
      this.deletePost
    );
    this.router.put(
      `${this.path}/:id`,
      authenticate,
      postAuthenticate,
      this.updatePost
    );
    this.router.post(
      `${this.path}/like/:id`,
      authenticate,
      postLikeAuthenticate,
      this.likePost
    );
    this.router.post(
      `${this.path}/unlike/:id`,
      authenticate,
      postLikeAuthenticate,
      this.unlikePost
    );
    this.router.delete(`${this.path}/like/:id`, authenticate);
  }
  private createPost = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const Post: types.NewPost = req.body;
    const postService = new PostService();
    try {
      const response = await postService.insertPost(req.userid, Post.post);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  };
  private getAllPosts = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const userId: string = req.query.userid;
    try {
      const postService = new PostService();
      const response = await postService.getAllPosts(userId);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error");
    }
  };
  private deletePost = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const postService = new PostService();
    try {
      await postService.deletePost(parseInt(req.params.id));
      res.status(200).send(req.params.id);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  private updatePost = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const post: types.NewPost = req.body;
    const postService = new PostService();
    try {
      const response: types.Post = await postService.updatePost(
        post.post,
        parseInt(req.params.id)
      );
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  };
  private likePost = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const { id } = req.params;
    const likeService = new LikeService();
    try {
      const response: likesTypes.PostLikes = await likeService.likePost(
        parseInt(id),
        req.userid
      );
      const likeResponse: likesTypes.PostLikesResponse = {
        ...response,
        profile_photo: req.profile_photo,
        username: req.username,
      };
      res.status(200).send(likeResponse);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  };
  private unlikePost = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const { id } = req.params;
    const likeService = new LikeService();
    try {
      await likeService.unlikePost(parseInt(id));
      res.status(200).send(id);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  };
}
