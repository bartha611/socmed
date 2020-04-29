import * as knex from "knex";
import Knex from "knex";
import * as config from "../../knexfile";

export default class Connection {
  public knex() {
    return Knex(config);
  }
}
