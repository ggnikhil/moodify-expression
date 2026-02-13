const express = require("express")
const authRouter = require("./routes/auth.routes")
const postRouter = require("./routes/post.routes")
const cookieparser = require("cookie-parser")
const app = express()

app.use(express.json())
app.use(cookieparser())

app.use("/api/auth",authRouter)
app.use("/api/post",postRouter)

module.exports = app