const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
require("./models/User");
console.log(mongoose.modelNames());

mongoose
  .connect("mongodb://127.0.0.1:27017/socialmedia")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use(express.json());
  
const loginRoute = require("./pages/login");
const signupRoute = require("./pages/signup");
  
app.use("/api", signupRoute);
app.use("/api", loginRoute);
  

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
