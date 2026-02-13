const postController = require("../controllers/post.controller")
const express = require("express")
const multer = require("multer")
const postRouter = express.Router()

const upload = multer({
    storage:multer.memoryStorage()
})

postRouter.post("/",upload.single("image0"),postController.createPostController)

module.exports = postRouter