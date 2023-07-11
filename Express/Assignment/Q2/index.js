const express = require("express");

const app = express();

PORT = 3020;
HOSTNAME = 'localhost';

app.get('/',(req,res)=>{
    res.send({counter: counter })
});

let counter = 0;

app.get('/increment', (req, res) => {
    counter++;
    res.json({ counter: counter });
});

app.get('/decrement', (req, res) => {
    counter--;
    res.json({ counter: counter });
});


app.listen(PORT,()=>{
    console.log(`The Server is running on ${HOSTNAME}:${PORT}`);
})