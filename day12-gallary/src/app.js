const express = require("express") 

const postRouter = require("./routes/post.routes")
const app = express()

app.use(express.json())
app.use("/api/post/",postRouter)

module.exports = app