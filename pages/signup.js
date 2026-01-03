const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = mongoose.model("User");

router.post("/signup", (req, res) => {
  console.log("SIGNUP ROUTE HIT");
  console.log("BODY:", req.body);

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Username, email and password required",
    });
  }

  User.findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        res.status(409).json({ message: "User already exists" });
        return null;
      }

      return bcrypt.hash(password, 10);
    })
    .then((hashedPassword) => {
      if (!hashedPassword) return null;

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      console.log("NEW USER:", newUser);

      return newUser.save();
    })
    .then((savedUser) => {
      if (!savedUser) return;

      console.log("SAVED USER:", savedUser);
      res.status(201).json({ message: "Signup Successful" });
    })
    .catch((err) => {
      console.error("SIGNUP ERROR:", err);
      res.status(500).json({
        message: "Error creating user",
        error: err.message,
      });
    });
});

module.exports = router;
