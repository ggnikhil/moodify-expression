const userModel = require("../models/user.model")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const blacklistModel = require("../models/blacklist.model")
const redis = require("../config/cache")



async function register(req,res){
    const {username,password,email} = req.body

    const isUserAlreadyExist = await userModel.findOne({
        $or:[
            {email},{username}
        ]
    })

    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"user already exist with this cridential"
        })
    }

    const hash = await bcryptjs.hash(password,10)

    const user = await userModel.create({
        username:username,
        password:hash,
        email:email
    })

    const token = jwt.sign(
        {
            user:user._id,
            username:user.username
        },
        process.env.JWR_SECRECT,
        {
            expiresIn:"3d"
        }
    )

    res.cookie("token",token)

    res.status(201).json({
        message:"user register successfully",
        user:{
            username:user.username,
            email:user.email,
            userID:user._id
        },
        token
    })
}

async function login(req,res){
    const {username,password,email} = req.body

    const isUSerExist = await userModel.findOne({
        $or:[
            {email},{username}
        ]
    })
    .select("+password")

    if(!isUSerExist){
        return res.status(404).json({
            message:"user not found"
        })
    }

    const checkPassword = await bcryptjs.compare(password,isUSerExist.password)

    if(!checkPassword){
       return res.status(404).json({
            message:"unauthorized"
       })
    }

    const token = jwt.sign(
        {
            username:isUSerExist.username,
            userID:isUSerExist._id
        },process.env.JWR_SECRECT,
        {
            expiresIn:"3d"
        }
    )

    res.cookie("token",token)

    res.status(200).json({
        message:"user login successfully",
        user:{
            username:isUSerExist.username,
            email:isUSerExist.email,
            userID:isUSerExist._id
        },
        token
    })
}

async function getMe(req,res){
    const user = req.user
    
    const detail = await userModel.findById(user.userID)

    res.status(200).json({
        message:"data fetch successfully",
        detail
    })
}

async function logout(req,res){
    const token = req.cookies.token

    res.clearCookie("token")

    await redis.set(token, Date.now().toString(),"EX",60*60)

    res.status(200).json({
        message:"user logout successfully"
    })

}



module.exports = {
    register,
    login,
    getMe,
    logout
}