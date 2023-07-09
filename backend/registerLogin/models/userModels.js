const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxLenth: [20,'Name must be less than 20 char']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },

    password:{
        type: Number,
        required: [true, 'Password is required'],
        trim: true,
        maxLenth: [4,'Password must be less than 4 char']
    }
})

module.exports = mongoose.model("User",userSchema);