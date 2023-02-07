'use strict'

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

/* const init = require("./init-models.js");
init.initModels(sequelize); */

/* database.models = require("./app/models/availability.js")(sequelize, Sequelize);
database.models = require("./app/models/competence.js")(sequelize, Sequelize);
database.models = require("./app/models/competence_profile.js")(sequelize, Sequelize);
database.models = require("./app/models/person.js")(sequelize, Sequelize);
database.models = require("./app/models/role.js")(sequelize, Sequelize); */

const initModels = require("./init-models");
database.models = initModels(sequelize);

module.exports = database;