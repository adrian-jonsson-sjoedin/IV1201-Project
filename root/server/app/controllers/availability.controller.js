const database = require("../model");
const availability = database.availability;
const operator = database.Sequelize.Op;

// Create and Save a new Availability
exports.create = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Retrieve all Availabilities from the database.
exports.findAll = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Find a single Availability with an id
exports.findOne = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Update a Availability by the id in the request
exports.update = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Delete a Availability with the specified id in the request
exports.delete = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Delete all Availabilities from the database.
exports.deleteAll = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};
