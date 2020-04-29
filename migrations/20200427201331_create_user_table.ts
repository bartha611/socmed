import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("users", function (t) {
    t.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    t.string("password").notNullable();
    t.string("username").notNullable();
    t.string("email").notNullable().unique();
    t.string("profile_photo").nullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("users");
}
