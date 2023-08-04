const express = require("express");
const app = express();
const dbConnect = require("./config/dbConfig");
const path = require("path")
const bodyParser = require("body-parser");
const authRouter = require("./routes/userRouter")
const hbs = require("hbs")
const port = process.env.PORT || 3000

dbConnect();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


const staticPath = path.join(__dirname, "../public")
const viewPath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")
const cssPath = path.join(__dirname, "../public/css")

app.use(express.static(staticPath))
app.use(express.static(viewPath))
hbs.registerPartials(partialPath)
app.use("/css", express.static(cssPath))
app.use("/public", express.static(staticPath))

app.set("view engine", "hbs")
app.set("views", viewPath)

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/dashboard",(req,res)=>{
    res.render("dashboard")
})
app.get("/board",(req,res)=>{
    res.render("board")
})

app.use("", authRouter)

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})