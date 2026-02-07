const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors") 
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("./public"))

//post api
app.post("/api/notes",async (req,res)=>{
    const {title,discription} = req.body

    const note = await noteModel.create({
        title,discription
    })

    res.status(201).json({
        Message:"note created successfully",
        note
    })
})

//get
app.get("/api/notes",async (req,res)=>{

    const notes = await noteModel.find()

    res.status(200).json({
        Message:"notes fetch successfully",
        notes
    })
})
 
//del
app.delete("/api/notes/:id",async (req,res)=>{
    const id = req.params.id

    const note = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        Message:"note deleted successfully",
        note
    })
})

//patch
app.patch("/api/notes/:id",async (req,res)=>{
    const id = req.params.id
    const {discription} = req.body

    const note = await noteModel.findByIdAndUpdate(id,{discription})

    res.status(200).json({
        Message:"notes updated successfully",
        note
    })
})


module.exports = app 