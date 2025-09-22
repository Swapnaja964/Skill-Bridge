import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("applications", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("job_id").references("id").inTable("jobs").onDelete("CASCADE");
    table.uuid("resume_id").references("id").inTable("resumes").onDelete("CASCADE");
    table.float("match_percentage").notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("applications");
}
