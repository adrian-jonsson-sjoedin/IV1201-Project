/**
 * @module applicationRoute
 * This module exports a function which sets up a series of API routes
 * for the database resource 'application'.
 * @param {Object} app - An instance of the Express application
 */
module.exports = app => {
  const  application = require("../controllers/applicationController.js");

  var router = require("express").Router();

  router.post("/", application.create);

  router.get("/", application.findAll);

  router.get("/:application_id", application.findById);

  app.use('/api/application', router);
};