module.exports = app => {
    const competence_profile = require("../controllers/competence_profileController.js");
  
    var router = require("express").Router();

    router.post("/add", competence_profile.create);

    router.get("/", competence_profile.findAll);
  
    router.put("/update", competence_profile.update);

    router.delete("/delete", competence_profile.delete);
  
    app.use('/api/competence_profile', router);
};