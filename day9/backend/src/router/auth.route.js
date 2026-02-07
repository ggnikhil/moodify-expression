const express = require("express")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const authRouter = express.Router()

authRouter.post("/register",async (req,res)=>{
    const {userName,email,password} = req.body
    const isUserAlreadyExist = await userModel.findOne({email})

    if(isUserAlreadyExist){
        res.status(409).json({
            message:"this email is already taken by the other users"
        })
    }

    const user = await userModel.create({
        userName,password,email
    })

    const token = jwt.sign(
        {
            id:user._id,
            email:user.email
        },
        process.env.JWT_SECRECT
    )

    res.cookie("jwt_token",token)

    res.status(201).json({
        message:"user resigter successfully",
        user,
        token
    })
})

module.exports = authRouter