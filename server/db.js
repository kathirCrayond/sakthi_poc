const Pool = require("pg").Pool;
require("dotenv").config();

const dbConfig = {
  user: "postgres",
  password: "postgres",
  host: "127.0.0.1",
  port: "5432",
  database: "poc",
};

const pool = new Pool(dbConfig);

module.exports = pool;
