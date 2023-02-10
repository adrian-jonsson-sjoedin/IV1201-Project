const database = require("../models");
const Person = database.person;
const sequelizeOperation = database.Sequelize.Op;

/**
 * @function create
 * Creates a new Person.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The created person or an error message if creation fails.
 */
exports.create = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a new Person
    const newPerson = {
        name: req.body.name,
        surname: req.body.surname,
        pnr: req.body.pnr,
        email: req.body.email,
        username: req.body.username,
        role_id: 2,
        password: req.body.password
    };

    try {
        const data = await Person.create(newPerson);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the person."
        });
    }
};

/**
 * @function login
 * Tries to find if a user with matching password exists.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} Returns the person or an error message if creation fails.
 */
exports.login = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const username = req.body.username
    const password = req.body.password

    try {
        const data = await Person.findOne({
            where: {
                [sequelizeOperation.and]: [
                    { username: username },
                    { password: password }
                ]
            }
        });
        if (!data) {res.send({
            status:
                "Failed"
            });
        } else {
            res.send(data);
        }      
        //res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while finding the person."
        });
    }
};

/**
 * @function findOne
 * Finds a Person based on the given id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The found Person or an error message if it fails.
 */
exports.findOne = async (req, res) => {
    const id = req.param.id;

    try {
        const data = await Person.findOne({
            where: {
                id: id
            }
        });
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || `Error finding Person with id=${id}.`
        });
    }
};

/**
 * @function findAll
 * Finds all Persons.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The Persons or an error message if it fails.
 */
exports.findAll = async (req, res) => {
    try {
        const data = await Person.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error finding Persons."
        });
    }
};

/**
 * @function findAllWithName
 * Finds all Persons with the given name-surname combination.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The Persons or an error message if it fails.
 */
exports.findAllWithName = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const name = req.body.name;
    const surname = req.body.surname;

    try {
        const data = await Person.findAll({
            where: {
                [sequelizeOperation.and]: [
                    { name: name },
                    { surname: surname }
                ]
            }
        });
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error finding Roles."
        });
    }
};

/**
 * @function update
 * Updates the password for a Person based on the given username and password.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A message indicating the password was updated successfully or an error message if update fails.
 */
exports.update = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const id = req.param.id;
    const newPassword = req.body.newPassword;

    try {
        const data = await Person.update({ password: newPassword }, {
            where: {
                id: id
            }
        });
        if (data == 1) {
            res.send({
                message: "Password was updated successfully."
            });
        } 
        else {
            res.send({
                message: `Cannot update password for Person with id=${id}. Maybe the Person was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: 
                err.message || `Error updating password for Person with id=${id}.`
        });
    }
};

/**
 * @function delete
 * Deletes a Person based on the given username and password.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A message indicating the Person was deleted successfully or an error message if delete fails.
 */
exports.delete = async (req, res) => {
    const id = req.param.id;

    try {
        const data = await Person.destroy({
            where: {
                id: id
            }
        });
        if (data == 1) {
            res.send({
                message: "Password was deleted successfully."
            });
        } 
        else {
            res.send({
                message: `Cannot delete Person with id=${id}. Maybe the Person was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: 
                err.message || `Error deleting Person with id=${id}.`
        });
    }
};


  