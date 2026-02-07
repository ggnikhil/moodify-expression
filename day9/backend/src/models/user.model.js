const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName:String,
    email:{
        type:String,
        unique:[true,"this email is already taken"]
    },
    password:String,
})

const userModel = mongoose.model("users",userSchema)
module.exports = userModel