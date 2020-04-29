import * as knex from "knex";
import * as types from "../interfaces/user.types";
import Connection from "./connection";

export default class UserService {
  private connection: knex;
  constructor() {
    this.connection = new Connection().knex();
  }
  public findById = (id: string) => {
    return this.connection<types.User>("users")
      .select("*")
      .where({ id })
      .first();
  };
  public findByEmail = (email: string) => {
    return this.connection<types.User>("users")
      .select("*")
      .where({ email })
      .first();
  };
  public insertUser = (user: types.Register) => {
    return this.connection<types.User>("users")
      .insert(user)
      .returning("*")
      .then((row) => row[0]);
  };
  public deleteUser = (id: string) => {
    return this.connection<types.User>("users")
      .table("users")
      .where({ id })
      .del();
  };
}
