/**
 * @module personRoute
 * This module exports a function which sets up a series of API routes
 * for the database resource 'person'.
 * @param {Object} app - An instance of the Express application
 */
module.exports = app => {
    const person = require("../controllers/personController.js");
    const auth = require('../controllers/auth.js')
  
    var router = require("express").Router();
    
    router.post("/", person.create);

    router.post("/login", person.login);

    router.get("/", auth.verifyRecruiter, person.findAll);

    router.get("/:person_id", auth.verifyRecruiter, person.findById);
  
    router.get("/names", auth.verifyRecruiter, person.findAllWithName);

    router.get("/pnr/:pnr", auth.verifyRecruiter, person.findByPnr);

    router.put("/:person_id", auth.verifyRecruiter, person.update);

    router.delete("/:person_id", auth.verifyRecruiter, person.delete);
  
    app.use('/api/person', router);
};
  