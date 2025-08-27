
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('runs', table => {
    table.increments('id').primary();
    table.string('job_name').notNullable().unique();
    table.string('status').notNullable().defaultTo('SUBMITTED'); // SUBMITTED | RUNNING | SUCCEEDED | FAILED
    table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('run_metrics', table => {
    table.increments('id').primary();
    table
      .integer('run_id')
      .notNullable()
      .references('id')
      .inTable('runs')
      .onDelete('CASCADE');
    table.float('p95').nullable();
    table.float('rps').nullable();
    table.integer('errors').nullable();
    table.jsonb('raw').nullable();
    table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());
  });

  await knex.schema.alterTable('run_metrics', table => {
    table.index(['run_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('run_metrics');
  await knex.schema.dropTableIfExists('runs');
}
