/**
 * @module roleRoute
 * This module exports a function which sets up a series of API routes
 * for the database resource 'role'.
 * @param {Object} app - An instance of the Express application
 */
module.exports = app => {
    const role = require("../controllers/roleController.js");
    const auth = require('../controllers/auth.js')
  
    var router = require("express").Router();

    router.post("/", role.create);

    router.get("/", role.findAll);
  
    router.put("/:id", role.update);

    router.delete("/:id", role.delete);
  
    app.use('/api/role', auth.verifyRecruiter, router);
};