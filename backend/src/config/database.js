const mongoose = require("mongoose")

function connectedToDB(){
    mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("database connected successfully")
        })
}

module.exports = connectedToDB