const Pool = require("pg").Pool;
require("dotenv").config();

const dbConfig = {
  user: "postgres",
  password: "crayond@123",
  host: "216.48.181.125",
  port: "1997",
  database: "poc",
};

const pool = new Pool(dbConfig);

module.exports = pool;
