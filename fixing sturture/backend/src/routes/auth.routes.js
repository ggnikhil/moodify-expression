const authController = require("../controllers/auth.controller")
const verifyUserMiddleware = require("../middleware/post.middleware")
const express = require("express")
const authRouter = express.Router()

authRouter.post("/register",authController.registerController)
authRouter.post("/login",authController.loginController)
authRouter.get("/getme",verifyUserMiddleware,authController.getMyDetails)

module.exports = authRouter