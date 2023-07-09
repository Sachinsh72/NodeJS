const express = require("express");

const {home, login, register} = require("../controllers/userControllers");

const router = express.Router();

router.get("/",home);
router.post("/register",register);
router.post("/login",login);

module.exports = router;