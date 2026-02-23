const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    image:String,
    discription:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    likes:{
        type:Number,
        default:0
    },
    comments:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})

const postModel = mongoose.model("posts",postSchema)

module.exports = postModel