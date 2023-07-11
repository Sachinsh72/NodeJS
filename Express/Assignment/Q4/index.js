const express = require("express");

const app = express();

PORT = 3020;
HOSTNAME = 'localhost';

let random = 10;

app.get('/random', (req, res) => {
    res.json({ random: random });
});

app.listen(PORT,()=>{
    console.log(`The Server is running on ${HOSTNAME}:${PORT}`);
})