module.exports = app => {
    const competence = require("../controllers/competenceController.js");
  
    var router = require("express").Router();

    router.post("/add", competence.create);

    router.get("/", competence.findAll);
  
    router.put("/update", competence.update);

    router.delete("/delete", competence.delete);
  
    app.use('/api/competence', router);
};