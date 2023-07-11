const express = require("express");

const app = express();

PORT = 3030;
HOSTNAME = 'localhost';

app.get('/',(req,res)=>{
    res.json({msg : `i am homepage`})
});

app.get('/about',(req,res)=>{
    res.json({msg : `i am about page`})
});

app.get('/contact',(req,res)=>{
    res.json({email:`suppor@pwskills.com`})
});

app.listen(PORT,()=>{
    console.log(`Server is listen on ${HOSTNAME}:${PORT}`);
})