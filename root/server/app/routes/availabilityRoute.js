/**
 * @module availabilityRoute
 * This module exports a function which sets up a series of API routes
 * for the database resource 'availability'.
 * @param {Object} app - An instance of the Express application
 */
module.exports = app => {
    const availability = require("../controllers/availabilityController.js");
    const auth = require('../controllers/auth.js')
  
    var router = require("express").Router();

    router.post("/", availability.create);

    router.get("/", availability.findAll);

    router.get("/:id", availability.findById);

    router.get("/person/:id", availability.findByPersonId);

    router.get("/period", availability.findByPeriod);
  
    router.put("/:id", availability.update);

    router.delete("/:id", availability.delete);
  
    app.use('/api/availability', auth.verifyRecruiter, router);
};