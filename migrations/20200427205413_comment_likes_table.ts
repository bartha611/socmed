import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("comment_likes", function (t) {
    t.increments("id").unsigned().primary();
    t.uuid("userid").references("id").inTable("users");
    t.integer("commentid").unsigned().references("id").inTable("comment");
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("comment_likes");
}
