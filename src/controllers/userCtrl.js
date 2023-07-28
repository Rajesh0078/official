const User = require("../models/userModels")


const createUser = async(req,res) =>{
    try {
        const email = req.body.email
        const findUser = await User.findOne({email:email});
        if(!findUser){
            const newUser = await User.create(req.body)
            res.render("index")
        }
        else{
            res.json({
                msg:"user already exists"
            })
        }   
    } catch (error) {
        console.log(error)
    }   
}

const userLogin = async(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const userEmail = await User.findOne({email:email})
    const userPass = await User.findOne({password:password})
    if(userEmail && userPass){
        res.render("dashboard")
    }
    else{
        res.json({
            msg:"user not found"
        })
    }
}


module.exports = {createUser, userLogin}