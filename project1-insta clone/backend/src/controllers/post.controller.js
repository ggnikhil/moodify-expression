const postModel = require("../models/post.model")
const userModel = require("../models/user.model")
const uploadFiles = require("../services/storage.service")
const jwt = require("jsonwebtoken")


async function createPostController(req,res){
    const {image,discription,userId} = req.body

    const token = (req.cookies.token)
    const verifyToken = jwt.verify(token,process.env.JWT_SECRECT)
    const user = await userModel.findById(verifyToken.id)

    const result = await uploadFiles(req.file.buffer)

    const fieldname = (req.file.fieldname)

    const posts = await postModel.create({
        image:result.url,
        discription,
        userId:user._id
    })


    res.status(201).json({
        message:"post created successfully",
        posts,
    })
}


async function fetchingPostController(req,res){
    const token = req.cookies.token
    
    console.log(token)

    if(!token){
        return res.status(401).json({
            message:"Unauthorized Access"
        })
    }

    let verify;

    try{
        verify = jwt.verify(token,process.env.JWT_SECRECT)
    }catch(err){
        res.status(401).json({
            message:"Unauthorized Access"
        })
    }

    const userID = verify.id

    const posts = await postModel.find({userId:userID})

    res.status(200).json({
        message:"post fetched successfully",
        posts
    })
}


async function postDetailsController(req,res){
    const token = req.cookies.token

    if(!token){
        res.status(401).json({
            message:"Unauthorized Access"
        })
    }

    let userId;

    try{
        userId = jwt.verify(token,process.env.JWT_SECRECT)
    }catch(err){
        res.status(401).json({
            message:"Unauthorized Access"
        })
    }

    console.log(userId.id)

    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"post not found"
        })
    }


    console.log(post.userId)

    const isUserIsReal = userId.id === (post.userId).toString()

    if(!isUserIsReal){
        return res.status(403).json({
            message:"Forbidden Content"
        })
    }

    res.status(201).json({
        message:"detail fetch successfully",
        post
    })
}


module.exports ={
    createPostController,
    fetchingPostController,
    postDetailsController
}