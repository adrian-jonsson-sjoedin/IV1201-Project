const database = require("../models");
const Applications = database.applications;
const Person = database.person;
const sequelizeOperation = database.Sequelize.Op;

/**
 * @function create
 * Creates a new Application.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The created Application or an error message if creation fails.
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
        const data = await Applications.create(req.body.name);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Application."
        });
    }
};

/**
 * @function findAll
 * Finds all Applications and adds the applicants name and surname to the output.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The Applications or an error message if it fails.
 */
exports.findAll = async (req, res) => {
    try {
        const data = await Applications.findAll({
          attributes: ['application_id', 'person_id', 'application_status'],
          include: [{
            model: Person,
            as: 'person',
            attributes: ['name', 'surname']
          }]
        });
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error finding Applications."
        });
    }
};


/**
 * @function findById
 * Finds an Application based on the given application_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The found Application or an error message if it fails.
 */
exports.findById = async (req, res) => {

  let application_id = JSON.stringify(req.params.application_id);

  try {
      const data = await Applications.findByPk({
          where: {
            application_id: application_id
          }
      });
      res.send(data);
  } catch (err) {
      res.status(500).send({
          message:
              err.message || `Error finding Application with application_id=${application_id}.`
      });
  }
};
