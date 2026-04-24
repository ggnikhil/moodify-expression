const postModel = require("../models/post.model")
const uploadFiles = require("../services/storage.service")
const likeModel = require("../models/like.model")
const jwt = require("jsonwebtoken")


async function createPostController(req,res){
    const {discription} = req.body

    if(!req.file){
        return res.status(400).json({
            message:"Image is required"
        })
    }

    const result = await uploadFiles(req.file.buffer)

    const posts = await postModel.create({
        image:result.url,
        discription,
        userId:req.user.id
    })

    res.status(201).json({
        message:"post created successfully",
        posts,
    })
}


async function fetchingPostController(req,res){
    try{
        const posts = await postModel.find({userId:req.user.id})
            res.status(200).json({
                message:"post fetched successfully",
                posts
            })
    }catch{
        res.status(500).json({
            message:"Internal server error"
        })
    }
}


async function postDetailsController(req,res){

    const postId = req.params.postId
    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"post not found"
        })
    }


    console.log(post.userId)

    const isUserIsReal = req.user.id === (post.userId).toString()

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

async function likePostRecord(req,res){
    const username = req.user.username
    const postId = req.params.postId

    console.log(username,postId) 

    const likeRecord = await likeModel.create({
        post:postId,
        user:username
    })

    res.status(201).json({
        message:"post likes successfully",
        likeRecord
    })
}


module.exports ={
    createPostController,
    fetchingPostController,
    postDetailsController,
    likePostRecord
}