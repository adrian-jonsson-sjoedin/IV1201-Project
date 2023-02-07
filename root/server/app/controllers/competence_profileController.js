const database = require("../model");
const competence_profile = database.competence_profile;
const operator = database.Sequelize.Op;

// Create and Save a new Competence_profile
exports.create = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Retrieve all Competence_profiles from the database.
exports.findAll = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Find a single Competence_profile with an id
exports.findOne = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Update a Competence_profile by the id in the request
exports.update = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Delete a Competence_profile with the specified id in the request
exports.delete = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};

// Delete all Competence_profiles from the database.
exports.deleteAll = (req, res) => {
    res.status(405).send({ 
        message:
            err.message || "Method Not Allowed."
    });
};
