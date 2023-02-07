const database = require("../model");
const role = database.competence_profile;
const operator = database.Sequelize.Op;

// Create and Save a new Role
exports.create = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Retrieve all Roles from the database.
exports.findAll = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Find a single Role with an id
exports.findOne = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Update a Role by the id in the request
exports.update = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Delete a Role with the specified id in the request
exports.delete = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Delete all Roles from the database.
exports.deleteAll = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};
