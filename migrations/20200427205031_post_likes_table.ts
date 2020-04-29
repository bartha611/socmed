import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("post_likes", function (t) {
    t.increments("id").unsigned().primary();
    t.uuid("userid").references("id").inTable("users");
    t.integer("postid").unsigned().references("id").inTable("post");
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("post_likes");
}
