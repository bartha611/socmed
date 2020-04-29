import * as express from "express";
import LikeService from "../helpers/likeService";
import * as types from "../interfaces/likes.types";

export default async function commentLikesAuthenticate(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { id } = req.params;
  const service = req.path.split("/")[3];
  const likesService = new LikeService();
  try {
    const response:
      | types.CommentLikes
      | undefined = await likesService.findByIdComment(parseInt(id));
    if (service === "unlike" && !response) {
      res.status(404).send("Post hasn't been liked yet");
    } else if (service === "like" && response) {
      res.status(404).send("Post is already liked");
    } else {
      next();
    }
  } catch (err) {
    res.status(500).send(err);
  }
}
