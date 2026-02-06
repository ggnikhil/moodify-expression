const express = require("express")
const app = express()

app.use(express.json())

const notes = []

app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message :"notes created successfully"
    })
})

app.get("/notes",(req,res)=>{
    res.status(200).json({
        notes:notes
    })
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]

    res.status(204).json({
        message:"notes deleted"
    })
})

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].discription = req.body.discription

    res.status(200).json({
        message:"notes updated"
    })
})


module.exports = app