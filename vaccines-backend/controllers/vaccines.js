const vaccinesRouter = require("express").Router();
const Vaccine = require("../models/vaccine");

vaccinesRouter.get("/", async (request, response) => {
  const vaccines = await Vaccine.find({});
  response.json(vaccines);
});

module.exports = vaccinesRouter;
