const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        unique:[true,"This userName is already taken by other users"],
        required:[true,"user is must required"]
    },
    email:{
        type:String,
        unique:[true,"This Email is already taken by other users"],
        required:[true,"user is must required"]
    },
    profile:{
        type:String,
        default:"https://ik.imagekit.io/nikhil29/download.jpg?updatedAt=1770782693099"
    },
    bio:String,
    password:String
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel