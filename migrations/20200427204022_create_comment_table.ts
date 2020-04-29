import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("comment", function (t) {
    t.increments("id").unsigned().primary();
    t.string("comment").notNullable();
    t.uuid("userid").references("id").inTable("users");
    t.integer("postid").unsigned().references("id").inTable("post");
    t.dateTime("createdat").defaultTo(knex.fn.now());
    t.dateTime("updatedat").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("comment");
}
