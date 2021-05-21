const vaccinationsRouter = require("express").Router();
const Vaccination = require("../models/vaccination");

vaccinationsRouter.get("/", async (request, response) => {
  const vaccinations = await Vaccination.find({});
  response.json(vaccinations);
});

module.exports = vaccinationsRouter;
