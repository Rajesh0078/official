const mongoose = require("mongoose")

const dbConnect = async ()=>{
    try {
        const connect = await mongoose.connect("mongodb+srv://peketirajesh007:123@cluster0.ebqz3rl.mongodb.net/")
        console.log("db connected successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect