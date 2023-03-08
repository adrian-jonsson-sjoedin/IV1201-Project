const database = require("../models");
const Competence_profile = database.competence_profile;
const sequelizeOperation = database.Sequelize.Op;

/**
 * @function create
 * Creates a new Competence_profile.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The created Competence_profile or an error message if creation fails.
 */
exports.create = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const newProfile = {
        person_id: req.body.person_id,
        competence_id: req.body.competence_id,
        years_of_experience: req.body.years_of_experience
    }

    try {
        const data = await Competence_profile.create(newProfile);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Competence_profile."
        });
    }
};

/**
 * @function findAll
 * Finds all Competence_profiles.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} The Competence_profiles or an error message if it fails.
 */
exports.findAll = async (req, res) => {
    try {
        const data = await Competence_profile.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error finding Competence_profiles."
        });
    }
};

/**
 * @function findById
 * Retrieves a Competence_profile with specified competence_profile_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} Returns the Competence_profile or an error message if creation fails.
 */
exports.findById = async (req, res) => {

    const competence_profile_id = req.params.competence_profile_id

    try {
        const data = await Competence_profile.findByPk({
            where: {
                competence_profile_id: competence_profile_id
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
                err.message || "Some error occurred while finding the Competence_profile."
        });
    }
};

/**
 * @function findByPersonId
 * Retrieves a Competence_profile with specified person_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} Returns the Competence_profile or an error message if creation fails.
 */
exports.findByPersonId = async (req, res) => {

  const person_id = req.params.person_id

  try {
      const data = await Competence_profile.findAll({
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
              err.message || "Some error occurred while finding the Competence_profile."
      });
  }
};

/**
 * @function findByCompetenceId
 * Retrieves a Competence_profile with specified competence_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} Returns the Competence_profile or an error message if creation fails.
 */
exports.findByCompetenceId = async (req, res) => {

  const competence_id = req.params.competence_id

  try {
      const data = await Competence_profile.findAll({
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
              err.message || "Some error occurred while finding the Competence_profile."
      });
  }
};

/**
 * @function findByBothId
 * Retrieves a Competence_profile with specified person_id and competence_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} Returns the Competence_profile or an error message if creation fails.
 */
exports.findByBothId = async (req, res) => {

  const person_id = req.params.person_id
  const competence_id = req.params.competence_id

  try {
      const data = await Competence_profile.findOne({
          where: {
              [sequelizeOperation.and]: [
                  { person_id: person_id },
                  { competence_id: competence_id }
              ]
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
              err.message || "Some error occurred while finding the Competence_profile."
      });
  }
};

/**
 * @function update
 * Updates the years_of_experience for a Competence_profile with a specified competence_profile_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A message indicating the Competence_profile was updated successfully or an error message if update fails.
 */
exports.update = async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const competence_profile_id = req.body.competence_profile_id;
    const years_of_experience = req.body.years_of_experience;

    try {
        const data = await Competence_profile.update({ years_of_experience: years_of_experience }, {
            where: {
              competence_profile_id: competence_profile_id
            }
        });
        if (data == 1) {
            res.send({
                message: "Competence_profile years_of_experience was updated successfully."
            });
        } 
        else {
            res.send({
                message: `Cannot update years_of_experience name for Competence_profile with competence_profile_id=${competence_profile_id}. Maybe the Competence_profile was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: 
                err.message || `Error updating years_of_experience for Competence_profile with competence_profile_id=${competence_profile_id}`
        });
    }
};

/**
 * @function delete
 * Deletes a Competence_profile based on the given competence_profile_id.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A message indicating the Competence_profile was deleted successfully or an error message if delete fails.
 */
exports.delete = async (req, res) => {

    const competence_profile_id = req.params.competence_profile_id;

    try {
        const data = await Competence_profile.destroy({
            where: {
                competence_profile_id: competence_profile_id
            }
        });
        if (data == 1) {
            res.send({
                message: "Competence_profile was deleted successfully."
            });
        } 
        else {
            res.send({
                message: `Cannot delete Competence_profile with competence_profile_id=${competence_profile_id}. Maybe the Competence_profile was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: 
                err.message || `Error deleting Competence_profile with competence_profile_id=${competence_profile_id}`
        });
    }
};