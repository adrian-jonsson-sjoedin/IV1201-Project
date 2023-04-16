const database = require("../models");
const Application = database.application;
const Person = database.person;

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
        const data = await Application.create(req.body.name);
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
 * Finds all Application and adds the applicants name and surname to the output.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The Application or an error message if it fails.
 */
exports.findAll = async (req, res) => {
    try {
        
        const data = await Application.findAll({
          include: [{
            model: Person,
            as: 'person',
            attributes: ["name", "surname"]
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
  const application_id = req.params.application_id;
  try {
      const data = await Application.findOne(application_id);
      res.send(data);
  } catch (err) {
      res.status(500).send({
          message:
              err.message || `Error finding Application with application_id=${application_id}.`
      });
  }
};
