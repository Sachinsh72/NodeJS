const User = require('../models/userModels')

exports.home = (req, res) => {
    res.send('Hello World!')
};

exports.register = async (req,res)=>{
    //extract info
    try {
        const {name,email,password} = req.body

        if(!name || !email ||!password){
            throw new Error("Nmae, Email and Password is required")
        }
        
        const user = await User.create({
            name,
            email,
            password
        })

        res.status(201).json({
            success : true,
            message: "User Registered Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success : false,
            message: "User already exists"
        })
    }
}


exports.login = async (req,res) => {
    try {
        const {email,password} = req.body
        if(!email ||!password){
            throw new Error("Email and Password is required")
        }

        const userExits = await User.findOne({email,password})
        if(!userExits){
            throw new Error("User not found")
        }

        res.status(200).json({
            success : true,
            message:"User Login Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success : false,
            message: error.message
        })
    }
}