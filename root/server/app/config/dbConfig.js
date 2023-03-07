
module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: "mysql",
    pool: { // Will be used for Sequelize connection pool configuration
        max: 5, // Maximum number of connection in pool
        min: 0, // Minimum number of connection in pool
        acquire: 30000, // Maximum time, in milliseconds, that a connection can be idle before being released
        idle: 10000 // Maximum time, in milliseconds, that pool will try to get connection before throwing error
      }};