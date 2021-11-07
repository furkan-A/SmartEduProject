const express = require("express");
const authController = require("../controller/authController");

const router = express.Router();

// localhost:4000/users/signup
router.route("/signup").post(authController.createUser);

module.exports = router;
