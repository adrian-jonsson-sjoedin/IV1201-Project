/**
 * @module applicationRoute
 * This module exports a function which sets up a series of API routes
 * for the database resource 'application'.
 * @param {Object} app - An instance of the Express application
 */
module.exports = app => {
  const  application = require("../controllers/applicationController.js");
  const auth = require('../controllers/auth.js')

  var router = require("express").Router();

  router.post("/", auth.verifyApplicant, application.create);

  router.get("/", auth.verifyRecruiter, application.findAll);

  router.get("/:application_id", auth.verifyRecruiter, application.findById);

  app.use('/api/application', router);
};