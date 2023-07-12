const userModel = require("../model/userSchema");
const emailValidator = require("email-validator");
//function 
const signup = async (req,res,next) =>{
    const { name, email, password, confirmPassword }= req.body;
    
    if(!name || !email || !password || !confirmPassword){
        return res.status(400).json({
            success: true,
            message: "Every field is required"
        })
    }

    const validEmail = emailValidator.validate(email);
    if(!validEmail){
        return res.status(400).json({
            success: false,
            message: "Please provide a valid email id"
        })

        if(password !== confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Password and confirm password doesn't match"
            })

        }
    }
    try {
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

    if (!email || !password){
        return res.status(400).json({
            success: false,
            message: "Every field is mandatory"
        })
    }

    const user = await userModel.findOne({
        email
    })
    .select('+password');

    if(!user || user.password === password){
        return res.status(400).json({
            success: false,
            message: "Invalid credentails"
        })
    }

    const token = user.jwtToken();
    user.password = undefined;

    const cookieOption = {
        maxAge : 24*60 * 60 *1000,
        httpOnly: true
    };

    res.c
}

module.exports = {
    signup, signin
}