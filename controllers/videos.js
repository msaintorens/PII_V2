const Video = require("../models/video");

exports.createVideo = (req, res, next) => {
  const video = new Video({
    videoUrl: req.body.videoUrl, //voir si il faut rajout un id
    nomVideo: req.body.nomVideo,
    idUser: req.body.idUser,
    description: req.body.description,
    pays: req.body.pays,
    date: req.body.date,
    //favori: req.body.favori,
    //nivVisibilite: req.body.nivVisibilite,
  });
  video
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneVideo = (req, res, next) => {
  Video.findOne({
    _id: req.params.id,
  })
    .then((video) => {
      res.status(200).json(video);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyVideo = (req, res, next) => {
  const video = new Video({
    _id: req.params.id,
    videoUrl: req.body.videoUrl, //voir si il faut rajout un id
    nomVideo: req.body.nomVideo,
    idUser: req.body.idUser,
    description: req.body.description,
    pays: req.body.pays,
    date: req.body.date,
  });
  Video.updateOne({ _id: req.params.id }, video)
    .then(() => {
      res.status(201).json({
        message: "Video updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteVideo = (req, res, next) => {
  Video.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllVideos = (req, res, next) => {
  Video.find()
    .then((videos) => {
      res.status(200).json(videos);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
