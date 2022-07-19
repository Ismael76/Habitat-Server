const { Pool } = require("pg");

//Connect PG Database We Created On Heroku To Our Server
let config;

if (process.env.DATABASE_URL) {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const pool = new Pool(config);

module.exports = pool;
