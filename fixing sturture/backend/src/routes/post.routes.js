const postController = require("../controllers/post.controller")
const express = require("express")
const multer = require("multer")
const postRouter = express.Router()
const verifyUserMiddleware = require("../middleware/post.middleware")

const upload = multer({
    storage:multer.memoryStorage()
})

postRouter.post("/likes/:postId",verifyUserMiddleware,postController.likePostRecord)
postRouter.post("/",upload.single("image0"),verifyUserMiddleware, postController.createPostController)
postRouter.get("/get",verifyUserMiddleware, postController.fetchingPostController)
postRouter.get("/details/:postId",verifyUserMiddleware, postController.postDetailsController)

module.exports = postRouter