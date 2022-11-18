import mysql from "mysql2";
import "dotenv/config";
// require("dotenv").config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
  queueLimit: 0, // unlimited
};
// console.log("dbconfig check: ", dbConfig);
const pool = mysql.createPool(dbConfig);
const promisePool = pool.promise();
//
export = promisePool;
