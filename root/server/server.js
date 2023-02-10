const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const database = require("./app/models");

database.sequelize.sync().then(() => {
    console.log("Database has been connected.");
  });

// In development, you may need to drop existing tables and re-sync database.
/* database.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  }); */


app.get("/", (req, res) => {
    res.json({ message: "Hello, world!" });
  });

// set port, listen for requests
require("./app/routes/personRoute")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });