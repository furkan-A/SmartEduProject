const express = require("express");
const categoryController = require("../controller/categoryController");

const router = express.Router();

// localhost:3003/categories
router.route("/").post(categoryController.createCategory);

module.exports = router;
