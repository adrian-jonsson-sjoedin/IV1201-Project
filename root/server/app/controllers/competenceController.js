const database = require("../models");
const Competence = database.competence;
const sequelizeOperation = database.Sequelize.Op;

/**
 * @function create
 * Creates a new Competence.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The created Competence or an error message if creation fails.
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
        const data = await Competence.create(req.body.name);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Competence."
        });
    }
};

/**
 * @function findAll
 * Finds all Competences.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The Competences or an error message if it fails.
 */
exports.findAll = async (req, res) => {
    try {
        const data = await Competence.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error finding Competences."
        });
    }
};

/**
 * @function findById
 * Retrieves a Competence with specified competence_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} Returns the Competence or an error message if creation fails.
 */
exports.findById = async (req, res) => {

  const competence_id = req.params.competence_id

  try {
      const data = await Competence.findByPk({
          where: {
              competence_id: competence_id
          }
      });
      if (!data) {res.send({
          status:
              "Not found"
          });
      } else {
          res.send(data);
      }      
  } catch (err) {
      res.status(500).send({
          message:
              err.message || "Some error occurred while finding the Competence."
      });
  }
};

/**
 * @function findByName
 * Retrieves a Competence with specified name.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} Returns the Competence or an error message if creation fails.
 */
exports.findByName = async (req, res) => {
  // Validate request
  if (Object.keys(req.body).length === 0) {
      res.status(400).send({
          message: "Content can not be empty!"
      });
      return;
  }

  const name = req.body.name

  try {
      const data = await Competence.findOne({
          where: {
              name: name
          }
      });
      if (!data) {res.send({
          status:
              "Not found"
          });
      } else {
          res.send(data);
      }      
  } catch (err) {
      res.status(500).send({
          message:
              err.message || "Some error occurred while finding the Competence."
      });
  }
};

/**
 * @function update
 * Updates the name for a Competence with a specified competence_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A message indicating the Competence name was updated successfully or an error message if update fails.
 */
exports.update = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const competence_id = req.body.competence_id;
    const newName = req.body.newName;

    try {
        const data = await Competence.update({ name: newName }, {
            where: {
                competence_id: competence_id
            }
        });
        if (data == 1) {
            res.send({
                message: "Competence name was updated successfully."
            });
        } 
        else {
            res.send({
                message: `Cannot update name for Competence with competence_id=${competence_id}. Maybe the Competence was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: 
                err.message || `Error updating Competence with competence_id=${competence_id}`
        });
    }
};

/**
 * @function delete
 * Deletes a Competence based on the given competence_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A message indicating the Competence was deleted successfully or an error message if delete fails.
 */
exports.delete = async (req, res) => {

    const competence_id = req.params.competence_id;

    try {
        const data = await Competence.destroy({
            where: {
                competence_id: competence_id
            }
        });
        if (data == 1) {
            res.send({
                message: "Competence was deleted successfully."
            });
        } 
        else {
          res.send({
              message: `Cannot delete Competence with competence_id=${competence_id}. Maybe the Competence was not found or req.body is empty!`
          });
      }
    } catch (err) {
        res.status(500).send({
            message: 
                err.message || `Error deleting Competence with competence_id=${competence_id}`
        });
    }
};