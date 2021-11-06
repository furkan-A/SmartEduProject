const express = require("express");
const courseController = require("../controller/courseController");

const router = express.Router();

// localhost:4000/courses
router.route("/").post(courseController.createCourse);
// show all courses
router.route("/").get(courseController.getAllCourses);
// show the course
router.route("/:slug").get(courseController.getCourse);

module.exports = router;
