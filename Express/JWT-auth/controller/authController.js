const userModel = require("../model/userSchema");
const emailValidator = require("email-validator");
const bcrypt = require('bcrypt');
//function 
const signup = async (req,res,next) =>{
    const { name, email, password, confirmPassword }= req.body;
    
    //every field is required
    if(!name || !email || !password || !confirmPassword){
        return res.status(400).json({
            success: false,
            message: "Every field is required"
        })
    }

    //validate email using npm package "email-validator"
    const validEmail = emailValidator.validate(email);
    if(!validEmail){
        return res.status(400).json({
            success: false,
            message: "Please provide a valid email id"
        })
    }
    try {
        //send password not match err if password !== confirmPassword
        if(password != confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Password and confirm password doesn't match"
            })
        }

        //UserSchema "pre" middleware function for "save" will hash the  password using "bcrypt" (npm package) before saving the data into the database
        //user model instance
        const userInfo = userModel(req.body)
        const result = await userInfo.save();

        return res.status(200).json({
            success: true,
            data: result
        })
    } catch (e) {

         if(e.code === 11000){
            return res.status(400).json({
                success: false,
                message: 'account already exist with provided email'
            })
        }
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
    
}

//signin
const signin = async (req,res) => {
    const {email,password} = req.body;

    //return response with an error message if the email of password is missing
    if (!email || !password){
        return res.status(400).json({
            success: false,
            message: "Every field is mandatory"
        })
    }

    try {
        const user = await userModel.findOne({
            email
        })
        .select('+password');
    
        if(!user || !(await bcrypt.compare( password, user.password))){
            return res.status(400).json({
                success: false,
                message: "Invalid credentails"
            })
        }
    
        //create the JWT token using the userSchema method (jwtToken())
        const token = user.jwtToken();
        user.password = undefined;
    
        const cookieOption = {
            maxAge : 24*60 * 60 *1000,
            httpOnly: true
        };
    
        //return a response with user object and cookie ( contains jwt Token)
        res.cookie("token",token, cookieOption);
        res.status(200).json({
            success: true,
            data: user
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message : e.message
        })
    }
}

//getuser
const getUser = async (req,res,next) => {
    const userId = req.user.id;

    try {
        const user = await userModel.findById(userId);
        return res.status(200).json({
            success : true,
            data : user
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }

}
//logout
const logout = (req, res) => {

    try {
        const cookieOption = {
            expires: new Date(),
            httpOnly: true
        };
        res.cookie("token",null, cookieOption);
        res.status(200).json({
            success: true,
            message: "logged Out"
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
        
    }
}

module.exports = {
    signup, signin, getUser, logout
}