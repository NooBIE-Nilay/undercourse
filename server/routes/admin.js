const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const { User, Course, Admin } = require("../db");
const { SECRET, authenticateJwt } = require("../middleware/auth");
const router = express.Router();

// Admin GET->Me => Fetches Username From Authorization Token
router.get("/me", authenticateJwt, async (req, res) => {
  const admin = await Admin.findOne({ username: req.user.username });
  if (!admin) {
    res.status(403).json({ msg: "Admin Doesn't Exists" });
  }
  res.json({
    username: admin.username,
    avatarUrl: admin.avatar_url,
  });
});

// Admin POST->Signup => Create New Admin Account & Return Token
router.post("/signup", async (req, res) => {
  const { username, password, avatar_url } = req.headers;
  const admin = await Admin.findOne({ username });
  if (admin) return res.status(403).json({ msg: "Admin Already Exists" });
  const newAdmin = new Admin({ username, password, avatar_url });
  newAdmin
    .save()
    .then(() => {
      const token = jwt.sign({ username, role: "admin" }, SECRET, {
        expiresIn: "1h",
      });
      return res.json({ msg: "Admin Created Successfully", token });
    })
    .catch((err) => {
      res.json({ msg: "Something Went Wrong While Saving to DB", err });
    });
});

// Admin POST->Signin => Login With Admin Account & Return Token
router.post("/signin", async (req, res) => {
  const { username, password } = req.headers;
  try {
    const admin = await Admin.findOne({ username, password });
    if (!admin) return res.json({ msg: "invalid username or password" });
    const token = jwt.sign({ username, role: "admin" }, SECRET, {
      expiresIn: "1h",
    });
    return res.json({ msg: "Logged in Successfully", token });
  } catch (err) {
    return res.json({ msg: "Something Went Wrong", err });
  }
});

// Admin GET->Courses => Fetches all courses
router.get("/courses", authenticateJwt, async (req, res) => {
  try {
    const courses = await Course.find({});
    return res.json({ courses });
  } catch (err) {
    return res.status(500).json({ msg: "Error Fetching Data from DB", err });
  }
});

// Admin GET->Course/:courseId => Fetches  course with given Course Id
router.get("/courses/:courseId", authenticateJwt, async (req, res) => {
  try {
    const course = await Course.findOne({ _id: req.params.courseId });
    if (!course) return res.status(404).json({ msg: "CourseId Invalid" });
    return res.json(course);
  } catch (err) {
    res.status(500).json({ msg: "Error Fetching Data from DB", err });
  }
});

// Admin POST->Courses => Add New Course To Database
router.post("/courses", authenticateJwt, (req, res) => {
  const { title, description, imageLink, price, published } = req.body;
  const course = { title, description, imageLink, price, published };
  try {
    const newCourse = new Course(course);
    newCourse
      .save()
      .then(() =>
        res
          .status(201)
          .json({ msg: "Course Created Successfully", id: newCourse._id })
      );
  } catch (err) {
    return res.status(501).json({ msg: "Error While Saving To DB", err });
  }
});

// Admin PATCH->course/:courseID => Update Course
router.patch("/courses/:courseId", authenticateJwt, async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const { title, description, imageLink, price, published } = req.body;
    const updatedCourse = { title, description, imageLink, price, published };
    const oldCourse = await Course.findByIdAndUpdate(
      { _id: courseId },
      updatedCourse,
      { returnDocument: "before" }
    );
    return res
      .status(202)
      .json({ msg: "Course Updated Successfully", oldCourse });
  } catch (err) {
    return res.status(501).json({ msg: "Error While Sav`ing To DB", err });
  }
});
router.delete("/courses/:courseid", authenticateJwt, async (req, res) => {
  const courseId = req.params.courseid;
  try {
    await Course.findByIdAndDelete(courseId);
    return res.status(200).json({ msg: "Course Deleted Successfully!" });
  } catch (err) {
    return res.status(501).json({ msg: "Error While Deleting From DB", err });
  }
});
module.exports = router;
