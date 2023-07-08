const User = require('../models/userModels')

exports.home = (req, res) => {
    res.send('Hello World!')
};

exports.createUser = async (req,res)=>{
    //extract info
    try {
        const {name,email} = req.body

        if(!name || !email){
            throw new Error("Nmae and Email is required")
        }

        const userExits = User.findOne({email})
        if(userExits){
            throw new Error("User already exists")
        }


        const user = await User.create({
            name,
            email
        })

        res.status(201).json({
            success : true,
            message: "User created Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success : false,
            message: error.message
        })
    }
}

exports.getUsers = async (req,res) => {
    try {
        const users = await User.find({})
        res.status(200).json({
            success : true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success : false,
            message: error.message
        })
    }
}

exports.editUser = async (res,req) =>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.id)
        res.status(200).json({
            success: true,
            message: "User has been successfully edited."
            
        })
    } catch (error) {
        res.status(401).json({
            success : false,
            message: error.message
        })
    }
}

exports.deleteUser = async (req,res)=>{
    try {
        const userId = req.params.id
        await User.findByIdAndDelete(userId)
        res.status(200).json({
            success : true,
            message: "User deleted successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success : false,
            message: error.message
        })
    }
}