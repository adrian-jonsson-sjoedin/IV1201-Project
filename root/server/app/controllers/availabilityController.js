const database = require("../models");
const Availability = database.availability;
const sequelizeOperation = database.Sequelize.Op;

/**
 * @function create
 * Creates a new Availability.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The created Availability or an error message if creation fails.
 */
exports.create = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const newAvailability = {
        person_id: req.body.person_id,
        from_date: req.body.from_date,
        to_date: req.body.to_date
    }

    try {
        const data = await Availability.create(newAvailability);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Availability."
        });
    }
};

/**
 * @function findAll
 * Finds all Availabilities.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The Availabilitys or an error message if it fails.
 */
exports.findAll = async (req, res) => {
    try {
        const data = await Availability.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error finding Availabilitys."
        });
    }
};

/**
 * @function findById
 * Retrieves a Availability with specified availability_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} Returns the Availability or an error message if creation fails.
 */
exports.findById = async (req, res) => {

  const availability_id = req.param.availability_id

  try {
      const data = await Availability.findByPk({
          where: {
              availability_id: availability_id
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
              err.message || "Some error occurred while finding the Availability."
      });
  }
};

/**
 * @function findByPersonId
 * Retrieves a Availability with specified person_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} Returns the Availability or an error message if creation fails.
 */
exports.findByPersonId = async (req, res) => {

  const person_id = req.params.person_id

  try {
      const data = await Availability.findOne({
          where: {
            person_id: person_id
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
              err.message || "Some error occurred while finding the Availability."
      });
  }
};

/**
 * @function findByPeriod
 * Retrieves all Availabilities within specified period.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} Returns the Availabilities or an error message if creation fails.
 */
exports.findByPeriod = async (req, res) => {
  // Validate request
  if (Object.keys(req.body).length === 0) {
      res.status(400).send({
          message: "Content can not be empty!"
      });
      return;
  }

  const from_date = req.body.from_date
  const to_date = req.body.to_date

  /* try {
      const data = await Availability.findAll({
          where: {
            person_id: person_id
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
              err.message || "Some error occurred while finding the Availability."
      });
  } */
};

/**
 * @function update
 * Updates the name for an Availability with a specified availability_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A message indicating the Availability was updated successfully or an error message if update fails.
 */
exports.update = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const availability_id = req.body.availability_id;
    const newName = req.body.newName;

    try {
        const data = await Availability.update({ name: newName }, {
            where: {
                availability_id: availability_id
            }
        });
        if (data == 1) {
            res.send({
                message: "Availability name was updated successfully."
            });
        } 
        else {
            res.send({
                message: `Cannot update name for Availability ${name}. Maybe the Availability was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: 
                err.message || "Error updating name for Availability " + name
        });
    }
};

/**
 * @function delete
 * Deletes an Availability based on the given username and password.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A message indicating the Availability was deleted successfully or an error message if delete fails.
 */
exports.delete = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const name = req.body.name;

    try {
        const data = await Availability.destroy({
            where: {
                name: name
            }
        });
        if (data == 1) {
            res.send({
                message: "Availability was deleted successfully."
            });
        } 
        else {
            res.send({
                message: `Cannot delete Availability ${name}. Maybe the Availability was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: 
                err.message || "Error deleting Availability " + name
        });
    }
};