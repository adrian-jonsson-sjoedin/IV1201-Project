const database = require("../models");
const Role = database.role;
const sequelizeOperation = database.Sequelize.Op;

/**
 * @function create
 * Creates a new Role.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The created Role or an error message if creation fails.
 */
exports.create = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    try {
        const data = await Role.create(req.body.name);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Role."
        });
    }
};

/**
 * @function findAll
 * Finds all Roles.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The Roles or an error message if it fails.
 */
exports.findAll = async (req, res) => {
    try {
        const data = await Role.findAll();
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
 * Updates the name for a Role.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A message indicating the Role name was updated successfully or an error message if update fails.
 */
exports.update = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const name = req.body.name;
    const newName = req.body.newName;

    try {
        const data = await Role.update({ name: newName }, {
            where: {
                name: name
            }
        });
        if (data == 1) {
            res.send({
                message: "Role name was updated successfully."
            });
        } 
        else {
            res.send({
                message: `Cannot update name for Role with role_id=${role_id}. Maybe the Role was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: 
                err.message || `Error updating name for Role with role_id=${role_id}.`
        });
    }
};

/**
 * @function delete
 * Deletes a Role based on the given role_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A message indicating the Role was deleted successfully or an error message if delete fails.
 */
exports.delete = async (req, res) => {

    const role_id = req.params.role_id;

    try {
        const data = await Role.destroy({
            where: {
              role_id: role_id
            }
        });
        if (data == 1) {
            res.send({
                message: "Role was deleted successfully."
            });
        } 
        else {
            res.send({
                message: `Cannot delete Role with role_id=${role_id}. Maybe the Role was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: 
                err.message || `Error deleting name for Role with role_id=${role_id}.`
        });
    }
};