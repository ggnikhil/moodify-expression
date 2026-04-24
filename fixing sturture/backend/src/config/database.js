const mongoose = require("mongoose")

async function connectToDB(){

    mongoose.connect(process.env.MONGO_URI)
        console.log("database is connected successfully")
}

module.exports = connectToDB