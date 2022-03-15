const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  //idUser: { type: Number, required: true },
  adresseMail: { type: String, required: true },
  mdp: { type: String, required: true },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  idVideos: { type: [String], required: false }, //ou type : Array
  pays: { type: String, required: false },
  description: { type: String, required: false },
  nbVideosPartagees: { type: Number, required: false },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
