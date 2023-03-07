/**
 * @module personRoute
 * This module exports a function which sets up a series of API routes
 * for the database resource 'person'.
 * @param {Object} app - An instance of the Express application
 */
module.exports = app => {
    const person = require("../controllers/personController.js");
  
    var router = require("express").Router();
    
    router.post("/", person.create);

    router.post("/login", person.login);

    router.get("/", person.findAll);

    router.get("/:person_id", person.findById);
  
    router.get("/names", person.findAllWithName);

    router.get("/pnr/:pnr", person.findByPnr);

    router.put("/:person_id", person.update);

    router.delete("/:person_id", person.delete);
  
    app.use('/api/person', router);
};
  