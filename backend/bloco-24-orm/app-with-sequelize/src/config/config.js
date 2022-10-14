// src/config/config.js

require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: 3000,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};