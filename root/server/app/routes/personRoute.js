module.exports = app => {
    const person = require("../controllers/personController.js");
  
    var router = require("express").Router();
  
    router.get("/login", person.findOne);
  
    app.use('/api/person', router);
  };