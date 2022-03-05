const express = require("express");
const pageController = require("../controller/pageController");
const redirectMiddleware = require('../middlewares/redirectMiddleware');

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/login").get(redirectMiddleware, pageController.getLoginPage);
router.route("/register").get(redirectMiddleware, pageController.getRegisterPage);
router.route("/contact").get(pageController.getContactPage);
router.route("/contact").post(pageController.sendEmail);

module.exports = router;
