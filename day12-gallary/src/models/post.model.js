const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    image:String,
    discription:String
})

const postModel = mongoose.model("post",postSchema)

module.exports = postModel