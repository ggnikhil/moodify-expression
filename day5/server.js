const app = require("./src/app")

const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect("mongodb+srv://nikhil:aXkQlSqFIWXCLDGC@projectday5.ajonbxd.mongodb.net/day5")
        .then(()=>{
            console.log("database connected")
        })
}

connectToDB()

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})