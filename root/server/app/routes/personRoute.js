module.exports = app => {
    const person = require("../controllers/personController.js");
  
    var router = require("express").Router();
    
    router.post("/", person.create);

    router.get("/", person.findAll);

    router.get("/names", person.findAllWithName);

    router.get("/:id", person.findOne);
  
    router.put("/:id", person.update);

    router.delete("/:id", person.delete);
  
    app.use('/api/person', router);
};
  