const router = require("express").Router();
const jwt = require("jsonwebtoken")
//importar controlador
const {signUpProcess, logInProcess, logOutProcess} =require("../controllers/auth.controllers")
//middlewares

//signup
router.post("/signup", signUpProcess);
//login
router.post("/login", logInProcess);
//logout
router.get("/logout", logOutProcess);

module.exports = router;
