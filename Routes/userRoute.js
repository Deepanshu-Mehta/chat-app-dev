const express = require("express");
const { register , login, logout, getOtherUsers} = require("../Controllers/userController");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(getOtherUsers);

module.exports = router;
 