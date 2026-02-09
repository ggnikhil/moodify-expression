const express = require("express")
const userModel = require("../model/user.model")
const authRouter = express.Router()
const JWT = require("jsonwebtoken")
const cyrpto = require("crypto")

authRouter.post("/register",async(req,res)=>{
    const {userName,password,email} = req.body

    const isUserAlreadyExists = userModel.findOne({email})

    if(isUserAlreadyExists){
        res.status(409).json({
            message:"this email is already esixt plz try another one"
        })
    }

    const hash = cyrpto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        userName,password:hash,email
    })

    const token = JWT.sign(
        {
            id:user._id,
            email:user.email
        },
        process.env.JWT_SECRECT
    )

    res.cookie("register_token",token)

    res.status(201).json({
        message:"user created successfully",
        user,
        token
    })
})

authRouter.post("/login",async (req,res)=>{
    const {password,email} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message:"Plz enter correct email"
        })
    }

    const hash = cyrpto.createHash("md5").update(password).digest("hex")
    
    if(user.password !== hash){
        return res.status(400).json({
            message:"Invalid password"
        })
    }

    const token = JWT.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRECT
    )

    res.cookie("login_token",token)

    res.status(201).json({
        message:"user login",
        token
    })
})

module.exports = authRouter