module.exports = app => {
    const role = require("../controllers/roleController.js");
  
    var router = require("express").Router();

    router.post("/add", role.create);

    router.get("/", role.findAll);
  
    router.put("/update", role.update);

    router.delete("/delete", role.delete);
  
    app.use('/api/role', router);
};