const express = require("express")
const cors = require("cors")
const authRouter = require("./routes/auth.routes")
const postRouter = require("./routes/post.routes")
const cookieparser = require("cookie-parser")
const app = express()

app.use(express.json())
app.use(cookieparser())
app.use(cors())

app.use("/api/auth",authRouter)
app.use("/api/post",postRouter)

module.exports = app