const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        unique:[true,"this username is already take by the other user"],
        required:["plz enter your username"],
        trim: true,
    },
    email:{
        type:String,
        unique:[true,"this email is already take by the other user"],
        required:["plz enter your email"],
        trim: true,
    },
    password:{
        type:String,
        required:["plz enter your password"]
    },
    profile:{
        type:String,
        default:"https://ik.imagekit.io/nikhil29/download.jpg?updatedAt=1770782693099"
    },
    bio:String,
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel