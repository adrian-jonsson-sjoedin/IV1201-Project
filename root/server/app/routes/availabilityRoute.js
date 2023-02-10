odule.exports = app => {
    const availability = require("../controllers/availabilityController.js");
  
    var router = require("express").Router();

    router.post("/", availability.create);

    router.get("/", availability.findAll);
  
    router.put("/", availability.update);

    router.delete("/", availability.delete);
  
    app.use('/api/availability', router);
};