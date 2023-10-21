// src/config/_database.js
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables
let sequelize;
try {
   sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  });
  
} catch (error) {
  console.log(error.message)
}
module.exports = sequelize;
