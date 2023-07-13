//express instance
const express = require('express');
const { signup, signin } = require('../controller/authController');
//router instance
const authRouter = express.Router();

//routes
authRouter.post('/signup',signup);
authRouter.post('/signin',signin);

//export 
module.exports = authRouter;