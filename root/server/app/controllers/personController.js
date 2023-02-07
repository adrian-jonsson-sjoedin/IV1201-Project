const database = require("../models");
const person = database.competence_profile;
const operator = database.Sequelize.Op;

// Create and Save a new Person
exports.create = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Retrieve all Persons from the database.
exports.findAll = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Find a single Person with a username and password
exports.findOne = (req, res) => {
    // Validate request
    /* if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
      
    Person.findOne({
        where: {
          name: req.body.name,
          password: req.body.password
        }
      }).then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: "No such user-password combination"
          });
        }
      }).catch(err => {
        res.status(500).send({
          message: "Error retrieving person"
        });
      }); */

    res.status(405).send({ 
        message:
            err.message || "HELLO!"
    });

};

// Update a Person by the id in the request
exports.update = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Delete a Person with the specified id in the request
exports.delete = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Delete all Persons from the database.
exports.deleteAll = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};


  