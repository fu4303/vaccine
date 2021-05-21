const mongoose = require("mongoose");

const vaccinationSchema = new mongoose.Schema({
  ["vaccination-id"]: String,
  sourceBottle: String,
  gender: String,
  vaccinationDate: String,
});

vaccinationSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Vaccination", vaccinationSchema);
