import * as knex from "knex";
import * as types from "../interfaces/comment.types";
import Connection from "./connection";

export default class CommentService {
  private connection: knex;
  constructor() {
    this.connection = new Connection().knex();
  }
  public createComment(userid: string, postid: number, comment: string) {
    return this.connection<types.CommentResponse>("comment")
      .insert({ comment, userid, postid })
      .returning("*")
      .then((row) => row[0]);
  }
  public updateComment(comment: string, id: number) {
    return this.connection<types.CommentResponse>("comment")
      .where({ id })
      .update({ comment, updatedat: new Date() });
  }
  public deleteComment(id: number) {
    return this.connection<types.CommentResponse>("comment")
      .where({ id })
      .del();
  }
}
