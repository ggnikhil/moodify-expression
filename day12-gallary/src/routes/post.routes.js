const express = require("express")
const postModel = require("../models/post.model")
const upLoadFile = require("../services/storage.service")

const multer = require("multer")

const postRouter = express.Router()

const upload = multer({
    storage:multer.memoryStorage()
})

postRouter.post("/create",upload.single("image_1") ,async (req,res)=>{
    const {image,discription}= req.body

    const result = await upLoadFile(req.file.buffer)
    console.log(result)

    const post = await postModel.create({
        image:result.url,discription
    })

    res.status(201).json({
        Message:"post created successfully",
        post,
        result
    })
})

module.exports =  postRouter