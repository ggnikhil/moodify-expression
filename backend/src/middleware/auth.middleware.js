const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")
const blacklistModel = require("../models/blacklist.model")
const redis = require("../config/cache")


async function verifyUserMiddleware(req,res,next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"token not provided"
        })
    }

    const checkBlacklistedToken = await redis.get(token)

    if(checkBlacklistedToken){
        return res.status(401).json({
            message:"invalid token"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWR_SECRECT)
        req.user = decoded
        next()
    }catch(err){
        return res.status(401).json({
             message:"unauthorized access"
        })
    }
}

module.exports = verifyUserMiddleware