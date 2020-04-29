import * as knex from "knex";
require("dotenv").config();

module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URI,
  pool: {
    min: 0,
    max: 7,
  },
} as knex.Config;
