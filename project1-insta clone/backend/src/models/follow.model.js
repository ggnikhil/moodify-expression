const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    following:String,
    followee:String,
    status:{
        type:String,
        default:"pending",
        enum:{
            values:["pending","accepted","rejected"],
            message:"status can only be pending,accecpted or rejected"
        }
    }
},{
    timestamps:true
})

followSchema.index({following:1 ,followee:1},{unique:true})

const followModel = mongoose.model("follow",followSchema)

module.exports = followModel