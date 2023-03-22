/**
 * @file server.js
 * Express server setup and configuration, connects to the database, and 
 * defines the routes for the application.
 */
const express = require("express");
const app = express();
require('dotenv').config();

/**
 * CORS options for the application where we specify
 * the allowed origin for CORS requests.
 */
const cors = require("cors");
const corsOptions = {
  origin: process.env.ORIGIN  
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Synchronizes the Sequelize models with the database and logs a message 
 * to the console when the connection is successful.
 */
const database = require("./app/models");
database.sequelize.sync().then(() => {
    console.log("Database has been connected.");
  }
);

/**
 * Imports the route functions and passes the Express app to them.
 */
require("./app/routes/applicationRoute")(app);
require("./app/routes/availabilityRoute")(app);
require("./app/routes/competenceRoute")(app);
require("./app/routes/competence_profileRoute")(app);
require("./app/routes/personRoute")(app);
require("./app/routes/roleRoute")(app);
require("./app/routes/authRoute")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  }
);
