/* 
Database models generated with sequelize-auto.
sequelize-auto -o "./app/models" -d iv1201_projectdb -h localhost -u root -p 3306 -x <password> -e mysql
*/

/**
 * 
 */
const dbConfig = require("../config/dbConfig.js");

const Sequelize = require("sequelize");
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

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

const init = require("./init-models.js");
init.initModels(sequelize);

database.application = require("./application.js")(sequelize, Sequelize);
database.availability = require("./availability.js")(sequelize, Sequelize);
database.competence = require("./competence.js")(sequelize, Sequelize);
database.competence_profile = require("./competence_profile.js")(sequelize, Sequelize);
database.person = require("./person.js")(sequelize, Sequelize);
database.role = require("./role.js")(sequelize, Sequelize);

module.exports = database;
