/**
 * @file index.js
 * This file configures the sequelize database connection and models. 
 * It exports an object containing Sequelize instance and sequelized models 
 * for the application. The models are generated with sequelize-auto tool.
 * The following is an example of how to run sequelize-auto.
 * sequelize-auto -o "./app/models" -d iv1201_projectdb -h localhost -u root -p 3306 -x <password> -e mysql
 */

const dbConfig = require("../config/dbConfig.js");
const Sequelize = require("sequelize");

/**
 * Creates a new Sequelize instance using the database configuration.
 * @type {Sequelize}
 */
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: process.env.DB_PORT,
    //operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });


/**
 * Object containing the Sequelize instance and all the models.
 * Uses the initModels function to initialize the models and set
 * up the associations between them.
 */
const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

const initModels = require("./init-models.js");
const models = initModels(sequelize);

database.application = models.application;
database.availability = models.availability;
database.competence = models.competence;
database.competence_profile = models.competence_profile;
database.person = models.person;
database.role = models.role;

module.exports = database;
