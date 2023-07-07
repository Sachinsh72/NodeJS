const express = require("express");

const app = express();

const PORT = 4020;
const HOSTNAME = 'localhost';

app.get('/',(req,res)=>{
    res.send('Hello World!')
});

app.get('/about',(req,res)=>{
    res.send('About!')
});

app.get('/contact',(req,res)=>{
    res.send('Contact!')
});

app.listen(PORT,()=>{
    console.log(`Server running at ${HOSTNAME}: ${PORT}`);
});