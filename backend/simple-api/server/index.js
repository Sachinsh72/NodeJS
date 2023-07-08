//Server

//------------ copied from documentation

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/youtube', (req, res) => {
//   res.send('Hello Sachin Sharma')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

//----------- fresh from scratch

const app = require("./app.js")

const PORT = 4000

app.listen(PORT, ()=>{
  console.log("server is listening at 4000");
})
