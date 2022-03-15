const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  videoUrl: { type: String, required: true },
  nomVideo: { type: String, required: true },
  idUser: { type: String, required: true }, //type ObjectId par reconnu
  description: { type: String, required: false },
  pays: { type: String, required: true },
  date: { type: Date, required: false },
  //favori: { type: Boolean, required: true },
  //nivVisibilite: { type: String, required: true },
});

module.exports = mongoose.model("Video", videoSchema);
