const mongoose = require("mongoose")

const blacklistSchema = new mongoose.Schema({
    token:{
        type:String,
        require:[true,"token must be required"],
    }
},{
    timestamps:true
})

const blacklistModel = mongoose.model("blacklist",blacklistSchema)

module.exports = blacklistModel