const express = require("express");
const router = express.Router();

const videosCtrl = require("../controllers/videos");

router.get("/", videosCtrl.getAllVideos);
router.post("/", videosCtrl.createVideo);
router.get("/:id", videosCtrl.getOneVideo);
router.put("/:id", videosCtrl.modifyVideo);
router.delete("/:id", videosCtrl.deleteVideo);

module.exports = router;
