const express = require("express")
const songRouter = express.Router()
const songController = require("../controller/song.controller")
const uplaod = require("../middleware/upload.middleware")

songRouter.post("/upload",uplaod.single("song"),songController.uploadSong)

module.exports = songRouter

