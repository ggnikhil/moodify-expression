const songModel = require("../models/song.model")
const id3 = require("node-id3")
const storageServices = require("../services/storage.services")

async function uploadSong(req,res){

    const songBuffer = req.file.buffer
    const tags =id3.read(songBuffer)
    const {mood} = req.body

    const songFile = await storageServices.uplaodFiles({
        buffer: songBuffer,
        filename: tags.title + ".mp3",
        folder:"/moodify/song"
    })

    const posterFile = await storageServices.uplaodFiles({
        buffer: tags.image.imageBuffer,
        filename: tags.title + ".jpeg",
        folder:"/moodify/poster"
    })

    const song = await songModel.create({
        songUrl:songFile.url,
        posterUrl: posterFile ? posterFile.url : null,
        title: tags.title,
        mood
    })

    res.status(201).json({
        message:"Song uplaoded successfully",
        song
    })
    
}

async function getSong(req,res){
    const {mood} = req.query 
    
    const findSongByMood = await songModel.findOne({mood})

    res.status(200).json({
        message:"song Fetch Successfully",
        findSongByMood
    })
}


module.exports = {
    uploadSong,
    getSong
}