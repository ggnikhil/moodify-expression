const express = require("express")
const verifyUserMiddleware = require("../middleware/post.middleware")
const followController = require("../controllers/follow.controller")
const followRouter = express.Router()

followRouter.post("/follow/:username",verifyUserMiddleware,followController.followUserController)
followRouter.post("/unfollow/:username",verifyUserMiddleware,followController.unFollowUserController)

module.exports = followRouter