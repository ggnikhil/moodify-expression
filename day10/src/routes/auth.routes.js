const userModel = require("../models/user.model")
const express = require("express")
const jwt = require("jsonwebtoken")
const authRouter = express.Router()


authRouter.post("/register",async (req,res)=>{
    const {userName,email,password} = req.body
    const isUserAlreadyExists = await userModel.findOne({email})

    if(isUserAlreadyExists){
       return res.status(409).json({
            Message:"this email is already then by other user..."
        })
    }

    const user = await userModel.create({
        userName,email,password
    })

    const token = jwt.sign(
        {
            id:user._id,
            email:user.email
        },
        process.env.JWT_SECRECT
    )

    res.cookie("JST_token",token)

    res.status(201).json({
        Message:"user created successfully",
        user,
        token
    })
})

authRouter.get("/fetch",async (req,res)=>{

    const users = await userModel.find()

    res.status(200).json({
        Message:"user data fetch successfully",
        users
    })
})

module.exports = authRouter