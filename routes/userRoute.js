const express = require("express");
const router = express.Router()
const {signUp, login, logout, testMiddleware} = require("../controllers/userController");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.route("/sign-up").post(signUp)
router.route("/login").post(login)
router.route("/logout").get(logout)
// router.route("/loggedInUser")
router.get("/loggedInUser", isLoggedIn, testMiddleware)

module.exports = router