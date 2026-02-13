const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    image:String,
    discription:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    }
})

const postModel = mongoose.model("posts",postSchema)

module.exports = postModel