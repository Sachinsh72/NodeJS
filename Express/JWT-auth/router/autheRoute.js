//express instance
const express = require('express');
const { signup, signin, getUser, logout } = require('../controller/authController');
const jwtAuth = require('../middleware/jwtAuth');
//router instance
const authRouter = express.Router();

//routes
authRouter.post('/signup',signup);
authRouter.post('/signin',signin);
authRouter.get('/user', jwtAuth, getUser);
authRouter.get('/logout', jwtAuth, logout);

//export 
module.exports = authRouter;