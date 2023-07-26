const express = require("express");
const dbConnect = require("./config/dbConfig");
const app = express();
const port = process.env.PORT || 3000

dbConnect();

app.get("/",(req,res)=>{
    res.send('hompage')
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})