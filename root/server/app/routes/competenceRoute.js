/**
 * @module competenceRoute
 * This module exports a function which sets up a series of API routes
 * for the database resource 'competence'.
 * @param {Object} app - An instance of the Express application
 */
module.exports = app => {
    const competence = require("../controllers/competenceController.js");
  
    var router = require("express").Router();

    router.post("/", competence.create);

    router.get("/", competence.findAll);

    router.get("/:id", competence.findById);

    router.get("/name", competence.findByName);
  
    router.put("/:id", competence.update);

    router.delete("/:id", competence.delete);
  
    app.use('/api/competence', router);
};