const express = require("express")
const noteModel = require("./model/note.model")
const app = express()

app.use(express.json())


// post api
app.post("/notes",async (req,res)=>{
    const {title,discription} = req.body

    const note = await noteModel.create({
        title,discription
    })

    res.status(201).json({
        message:"notes created successfully",
        note
    })
})

// get api

app.get("/notes",async (req,res)=>{
    const note = await noteModel.find()

    res.status(200).json({
        message:"notes fetch successfully",
        note
    })
})

module.exports = app