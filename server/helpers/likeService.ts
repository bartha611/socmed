import * as knex from "knex";
import Connection from "./connection";
import * as types from "../interfaces/likes.types";

export default class LikeService {
  private connection: knex;
  constructor() {
    this.connection = new Connection().knex();
  }
  public findByIdComment = (id: number) => {
    return this.connection<types.CommentLikes>("comment_likes")
      .select("*")
      .where({ id })
      .first();
  };
  public findByIdPost = (id: number) => {
    return this.connection<types.PostLikes>("post_likes")
      .select("*")
      .where({ id })
      .first();
  };
  public likePost = (postid: number, userid: string) => {
    return this.connection<types.PostLikes>("post_likes")
      .insert({ postid, userid })
      .returning("*")
      .then((row) => row[0]);
  };
  public unlikePost = (id: number) => {
    return this.connection<types.PostLikes>("post_likes").where({ id }).del();
  };
  public likeComment = (commentid: number, userid: string) => {
    return this.connection<types.CommentLikes>("comment_likes")
      .insert({ commentid, userid })
      .returning("*")
      .then((row) => row[0]);
  };
  public unlikeComment = (id: number) => {
    return this.connection<types.CommentLikes>("comment_likes")
      .where({ id })
      .del();
  };
}
