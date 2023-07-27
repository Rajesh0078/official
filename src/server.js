const express = require("express");
const app = express();
const dbConnect = require("./config/dbConfig");
const bodyParser = require("body-parser");
const authRouter = require("./routes/userRouter")
const port = process.env.PORT || 3000

dbConnect();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send('hompage')
})

app.use("",authRouter)

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})