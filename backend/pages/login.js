const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = mongoose.model("User");

router.post("/login", (req, res) => {
  console.log("LOGIN ROUTE HIT");
  console.log("BODY:", req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password required",
    });
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: "Invalid credentials" });
        return null;
      }
      return bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            res.status(401).json({ message: "Invalid credentials" });
            return null; 
          }

          res.status(200).json({
            message: "Login Successful",
            user: {
              id: user._id,
              username: user.username,
              email: user.email,
            },
          });
        });
    })
    .catch((err) => {
      console.error("LOGIN ERROR:", err);
      res.status(500).json({
        message: "Login failed",
        error: err.message,
      });
    });
});

module.exports = router;
