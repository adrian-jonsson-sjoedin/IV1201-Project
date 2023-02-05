const dbConfig = require("../config/dbConfig.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.tutorials = require("./model.js")(sequelize, Sequelize);

module.exports = database;