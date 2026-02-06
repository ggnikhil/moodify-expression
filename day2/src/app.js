const express = require("express")
const app = express()

app.use(express.json())

const notes = []

app.post("/notes",(req,res)=>{
    console.log(req.body)
    res.send("notes created")
    notes.push(req.body)
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("deleted")
})

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].discription =req.body.discription
})



module.exports = app