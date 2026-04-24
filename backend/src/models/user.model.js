const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:[true,"username is must required"]
    },
    email:{
        type:String,
        unique:true,
        require:[true,"email is must required"]
    },
    password:{
        type:String,
        required:true,
        select: false
    }
},{
    timestamps:true
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel