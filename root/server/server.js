/**
 * @file server.js
 * Express server setup and configuration. 
 */
const express = require("express");
const app = express();

const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const database = require("./app/models");
database.sequelize.sync().then(() => {
    console.log("Database has been connected.");
  }
);

// set port, listen for requests
//require("./app/routes/personRoute")(app);
require("./app/routes/*")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  }
);