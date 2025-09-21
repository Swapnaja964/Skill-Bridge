import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("jobs", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("recruiter_id").references("id").inTable("users").onDelete("CASCADE");
    table.string("title").notNullable();
    table.text("description").notNullable();
    table.jsonb("skills").notNullable(); // required skills
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("jobs");
}
