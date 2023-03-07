/**
 * @module applicationsRoute
 * This module exports a function which sets up a series of API routes
 * for the database resource 'applications'.
 * @param {Object} app - An instance of the Express application
 */
module.exports = app => {
  const  applications = require("../controllers/applicationsController.js");

  var router = require("express").Router();

  router.post("/", applications.create);

  router.get("/", applications.findAll);

  router.get("/:id", applications.findById);

  app.use('/api/applications', router);
};