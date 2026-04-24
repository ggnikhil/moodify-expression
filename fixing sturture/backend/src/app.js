const express = require("express")
const cors = require("cors")
const followRouter = require("./routes/follow.routes")
const authRouter = require("./routes/auth.routes")
const postRouter = require("./routes/post.routes")
const cookieparser = require("cookie-parser")
const app = express()

app.use(express.json())
app.use(cookieparser())
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))

app.use("/api/auth",authRouter)
app.use("/api/post",postRouter)
app.use("/api/user",followRouter)

module.exports = app