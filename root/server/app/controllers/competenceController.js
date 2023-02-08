const database = require("../models");
const competence = database.competence_profile;
const operator = database.Sequelize.Op;

// Create and Save a new Competence
exports.create = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Retrieve all Competences from the database.
exports.findAll = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Find a single Competence with an id
exports.findOne = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Update a Competence by the id in the request
exports.update = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Delete a Competence with the specified id in the request
exports.delete = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Delete all Competences from the database.
exports.deleteAll = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};
