import * as express from "express";
import PostService from "../helpers/postService";
import * as types from "../interfaces/post.types";

export default async function postAuthenticate(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { id } = req.params;
  const postId = parseInt(id);
  if (!postId) {
    res.sendStatus(404);
  }
  try {
    const postService = new PostService();
    const response: types.Post | undefined = await postService.findPostById(
      postId
    );
    if (!response) {
      res.status(403).send("Unauthorized");
    } else {
      response.userid === req.userid ? next() : res.sendStatus(403);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
