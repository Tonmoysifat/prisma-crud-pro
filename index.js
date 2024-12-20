const express = require("express");
const cookieParser = require('cookie-parser');
const userRouter = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
require("dotenv").config()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use("/api",userRouter)
app.use("/posts",postRoute)
app.get("/", (req, res) => {
    res.send("Learning prisma")
});

const port = 8974
app.listen(8974,()=>{
    console.log(`Server is running on port: http://localhost:${port}`);
})
