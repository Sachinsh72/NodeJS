const express = require("express")
const {createUser} = require("../userController/userController")

const router = express.Router()
router.post("/createuser", createUser)
module.exports = router