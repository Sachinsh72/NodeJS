require('dotenv').config();  //dotenv enabled

const express = require('express');
// import express form "express" - if we use this then we need to enable module in package.json ["type": "module" ]

const cors = require('cors')  //cors - cross origin request

const connectToDb = require('./config/db.js');

const app = express();

//Express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//init connection to db
connectToDb()

app.get('/', (req, res) => {
    res.send('Hello World!')
});

module.exports = app; 
// export default app;