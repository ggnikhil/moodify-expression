const userModel = require("../models/user.model")
const registerEmail = require("../services/email.service")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")


async function registerController(req,res){
    const {userName,bio,email,profile,password} = req.body

    const checkUser = await userModel.findOne({
        $or:[
            {email},
            {userName}
        ]
    })

    if(checkUser){
        return res.status(409).json({
            message:(checkUser.email === email)? "this email is already taken by the other users" : "this username is already taken by the other users"
        })
    }

    const hash = await bcryptjs.hash(password,10)

    const user = await userModel.create({
        userName,bio,email,password:hash,profile
    })

    const token = jwt.sign(
        {
            id:user._id,
            username:user.userName
        },process.env.JWT_SECRECT,
        {
            expiresIn:"1d"
        }
    )

    res.cookie("token",token)

    res.status(201).json({
        message:"user register successfully",
        user:{
            userName:user.userName,
            email:user.email,
            bio:user.bio,
            profile:user.profile,
            id:user._id
        },
        token
    })

    await registerEmail.sendingRegisterEmail(user.email,user.userName)

}

async function loginController(req,res){
    const {password,email,userName} = req.body
    
    const isUserExits = await userModel.findOne({
        $or:[
            {email},
            {userName}
        ]
    })

    if(!isUserExits){
        return res.status(409).json({
            message: email? "invalid email" :"invalid username"
        })
    }

    const checkPassword = await bcryptjs.compare(password,isUserExits.password)

    if(!checkPassword){
        return res.status(409).json({
            message:"invalid password"
        })
    }

    const token = jwt.sign(
        {
            id:isUserExits._id,
            username:isUserExits.userName
        },process.env.JWT_SECRECT,
        {
            expiresIn:"1d"
        }
    )

    res.cookie("token",token)

    res.status(201).json({
        message:"user login successfully",
        user:{
            email:isUserExits.email,
            userName:isUserExits.userName,
            email:isUserExits.email,
            bio:isUserExits.bio,
            profile:isUserExits.profile,
            id:isUserExits._id
        },
        token
    })
}

async function getMyDetails(req,res){
    

    const user = await userModel.findById(req.user.id)
    
    res.status(200).json({
        message:"user fetch successfully",
        details:{
            username:user.userName,
            email:user.email,
            profile:user.profile,
            bio:user.bio
        }
    })

}

module.exports = {
    registerController,
    loginController,
    getMyDetails
}