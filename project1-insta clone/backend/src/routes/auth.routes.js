const authController = require("../controllers/auth.controller")
const express = require("express")
const authRouter = express.Router()

authRouter.post("/register",authController.registerController)
authRouter.post("/login",authController.loginController)

module.exports = authRouter