const express = require("express");
const authController = require("../controller/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// localhost:3003/users/signup
router.route("/signup").post(authController.createUser);
router.route("/login").post(authController.loginUser);
router.route("/logout").get(authController.logOutUser);
router.route("/dashboard").get(authMiddleware, authController.getDashboardPage);

module.exports = router;
