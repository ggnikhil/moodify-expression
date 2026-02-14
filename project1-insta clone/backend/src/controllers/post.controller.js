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
    const posts = await postModel.find()
    
    res.status(200).json({
        message:"data fetch successfully",
        posts
    })
}

module.exports ={
    createPostController,
    fetchingPostController
}