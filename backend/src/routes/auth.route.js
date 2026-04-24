const express = require("express")
const authController = require("../controller/auth.controller")
const verifyUserMiddleware = require("../middleware/auth.middleware")

const authRouter = express.Router()

authRouter.post("/register",authController.register)
authRouter.post("/login",authController.login)
authRouter.get("/getMe",verifyUserMiddleware,authController.getMe)
authRouter.post("/logout",verifyUserMiddleware,authController.logout)


module.exports = authRouter