/** 
 * @module dbConfigTemplate.js
 * This is the configuration template for the database integration. 
 * Change the parameters as needed then save the file as dbConfig.js 
 * in the same folder. The gitignore will assure that your password
 * isn't uploaded.
*/
module.exports = {
    HOST: "localhost",
    USER: "root", // Change this if you have another user
    PASSWORD: "<your master password here>",
    DB: "iv1201_projectdb", // Change this if you have another name for the database
    dialect: "mysql",
    pool: { // Will be used for Sequelize connection pool configuration
        max: 5, // Maximum number of connection in pool
        min: 0, // Minimum number of connection in pool
        acquire: 30000, // Maximum time, in milliseconds, that a connection can be idle before being released
        idle: 10000 // Maximum time, in milliseconds, that pool will try to get connection before throwing error
      }};