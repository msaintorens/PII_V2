const User = require("../models/user");

function redirectionPageAccueil() {
  window.location.href = "/";
}

exports.createUser = (req, res, next) => {
  const user = new User({
    adresseMail: req.body.adresseMail,
    mdp: req.body.mdp,
    nom: req.body.nom,
    prenom: req.body.prenom,
    idVideos: req.body.idVideos,
    pays: req.body.pays,
    description: req.body.description,
    nbVideosPartagees: req.body.nbVideosPartagees,
  });
  user
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
  redirectionPageAccueil();
};

exports.getOneUser = (req, res, next) => {
  User.findOne({
    _id: req.params.id,
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyUser = (req, res, next) => {
  const user = new User({
    _id: req.params.id,
    adresseMail: req.body.adresseMail,
    mdp: req.body.mdp,
    nom: req.body.nom,
    prenom: req.body.prenom,
    idVideos: req.body.idVideos,
    pays: req.body.pays,
    description: req.body.description,
    nbVideosPartagees: req.body.nbVideosPartagees,
  });
  User.updateOne({ _id: req.params.id }, user)
    .then(() => {
      res.status(201).json({
        message: "User updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
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

exports.getAllUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
