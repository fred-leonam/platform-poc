import type { Knex } from 'knex';

const connection =
  process.env.PG_URL ??
  {
    host: 'localhost',
    port: 5432,
    user: 'backstage',
    password: 'backstage',
    database: 'backstage',
  };

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection,
    migrations: {
      directory: './migrations',
      extension: 'ts',
    },
  },
};

export default config;
module.exports = config;
