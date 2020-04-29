import * as knex from "knex";
import Connection from "./connection";
import * as types from "../interfaces/post.types";
import * as userTypes from "../interfaces/user.types";
import * as commentTypes from "../interfaces/comment.types";

export default class PostService {
  private connection: knex;
  constructor() {
    this.connection = new Connection().knex();
  }
  public insertPost = (userid: string, post: string): Promise<any> => {
    return this.connection<types.Post>("post")
      .insert({ userid, post })
      .returning("*")
      .then((row) => row[0]);
  };
  public getAllPosts = async (userid: string) => {
    return this.connection
      .select(
        "p.id AS id",
        "p.userid AS userid",
        "u.profile_photo AS profile_photo",
        "u.username AS username",
        "p.post AS post",
        "p.createdat AS createdat",
        "p.updatedat AS updatedat",
        this.connection.raw(`
          CASE WHEN COUNT(c.id) = 0 THEN null ELSE
            json_agg(json_build_object(
              'id', c.id,
              'comment', c.comment,
              'userid', c.userid,
              'username', cu.username,
              'profile_photo', cu.profile_photo,
              'createdat', c.createdat,
              'updatedat', c.updatedat
              )) 
          END AS comments
        `)
      )
      .from("post AS p")
      .innerJoin("users AS u", "u.id", "p.userid")
      .leftJoin("comment AS c", "c.postid", "p.id")
      .leftJoin("users AS cu", "cu.id", "c.userid")
      .whereRaw(`p.userId = ?`, [userid])
      .groupBy(
        "p.id",
        "p.userid",
        "p.post",
        "u.username",
        "u.profile_photo",
        "p.createdat",
        "p.updatedat"
      );
  };
  public deletePost = (id: number) => {
    return this.connection<types.Post>("post").where({ id }).del();
  };
  public findPostById = (id: number) => {
    return this.connection<types.Post>("post")
      .select("*")
      .where({ id })
      .first();
  };
  public updatePost = (post: string, id: number) => {
    return this.connection<types.Post>("post")
      .where({ id })
      .update({ post, updatedat: new Date() })
      .returning("*")
      .then((row) => row[0]);
  };
  public likePost = (postid: number, userid: string) => {
    return this.connection
      .table("likes")
      .insert({ userid, postid })
      .returning("*");
  };
}
