const express = require("express")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const authRouter = express.Router()

authRouter.post("/register",async (req,res)=>{
    const {email,password,userName,bio,profile} = req.body

    const isUserAlredayExixts = await userModel.findOne({
        $or:[
            {email},
            {userName}
        ]
    })

    if(isUserAlredayExixts){
        return res.status(409).json({
            message: isUserAlredayExixts.email == email ? "this email is already exixts" : "this username is already exixts"
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex")

    const user = await userModel.create({
        email,
        password:hash,
        bio,
        profile,
        userName
    })

    const token = jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRECT,
        {
            expiresIn:"1d"
        }
    )

     res.cookie("token",token)

    res.status(201).json({
        message:"user created successfully",
        user:{
            id:user._id,
            userName:user.userName,
            email:user.email,
            bio:user.bio,
        }
    })
})

authRouter.post("/logic",async (req,res)=>{

    const token = req.cookies.token

    const verifedToken = jwt.verify(token,process.env.JWT_SECRECT)

    const loginToken = jwt.sign(
        {
            id:user._id,
        },
        process.env.JWT_SECRECT,
        {
            expiresIn:"1d"
        }
    )

    res.status(201).json({
        message:"user login successfully",
        loginToken
    })
})

module.exports = authRouter