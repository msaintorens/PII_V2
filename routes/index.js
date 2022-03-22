var express = require("express");
var router = express.Router();

const Videos = require("../controllers/videos");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

/* GET page toutes les vidéos. */
router.get("/all_videos", function (req, res, next) {
  let lesVideos = Videos.getAllVideos();
  res.render("all_videos", { lesVideos });
});

/* GET page vidéos à la une. */
router.get("/spotlight_videos", function (req, res, next) {
  res.render("spotlight_videos");
});

/* GET page profil. */
router.get("/profile", function (req, res, next) {
  res.render("profile");
});

/* GET page connexion. */
router.get("/connexion", function (req, res, next) {
  res.render("connexion");
});

/* GET page inscription. */
router.get("/inscription", function (req, res, next) {
  res.render("inscription");
});

/* GET page d'ajout d'une vidéo. */
router.get("/addVideo", function (req, res, next) {
  res.render("addVideo");
});

module.exports = router;
