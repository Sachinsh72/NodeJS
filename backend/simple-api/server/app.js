const express = require('express')

const connectToDB = require("./configdb/db") //database connection

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectToDB()

const userRoutes = require("./routes/userRoutes")

app.use("/", userRoutes)

app.get("/",(req, res)=>{
  res.send("<h1>Welcome to our server</h1>")

})     // route

app.get("/youtube", (req, res)=>{
  res.send("<h1>Welcome to oue youtube </h1>")
})    // route

app.get("/json", (req, res)=>{
  res.json({
    succee : true,
    message : "welcome to json call"
  })
}) // api response

//export

module.exports = app