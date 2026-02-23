const jwt = require("jsonwebtoken")

async function verifyUserMiddleware(req,res,next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"unauthorized access"
        })
    }

    let decoded ;

    try{
        decoded = jwt.verify(token,process.env.JWT_SECRECT)
    }catch{
        return res.status(401).json({
            message:"unauthorized access"
        })
    }

    req.user = decoded

    next()
}

module.exports = verifyUserMiddleware