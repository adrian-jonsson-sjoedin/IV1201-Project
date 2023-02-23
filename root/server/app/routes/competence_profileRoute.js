/**
 * @module competence_profileRoute
 * This module exports a function which sets up a series of API routes
 * for the database resource 'competence_profile'.
 * @param {Object} app - An instance of the Express application
 */
module.exports = app => {
    const competence_profile = require("../controllers/competence_profileController.js");
  
    var router = require("express").Router();

    router.post("/", competence_profile.create);

    router.get("/", competence_profile.findAll);

    router.get("/:id", competence_profile.findById);

    router.get("/person/:id", competence_profile.findByPersonId);

    router.get("/competence/:id", competence_profile.findByCompetenceId);

    router.get("/person/:id/competence/:id", competence_profile.findByBothId);
  
    router.put("/:id", competence_profile.update);

    router.delete("/:id", competence_profile.delete);
  
    app.use('/api/competence_profile', router);
};