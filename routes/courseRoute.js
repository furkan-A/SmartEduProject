const express = require("express");
const courseController = require("../controller/courseController");
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// localhost:4000/courses
router.route("/").post(roleMiddleware(["teacher", "admin"]), courseController.createCourse);
// show all courses
router.route("/").get(courseController.getAllCourses);
// show the course
router.route("/:slug").get(courseController.getCourse);
router.route("/enroll").post(courseController.enrollCourse);

module.exports = router;
