const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const PORT = 5000


// MIDDLEWARE

app.use(express.json())
app.use(cors())


// MODELS

require("./models/User")
require("./models/post")

// ROUTES

const signupRoute = require("./pages/signup")
const loginRoute = require("./pages/login")
const postRoutes = require("./pages/post")

app.use("/api", signupRoute)
app.use("/api", loginRoute)
app.use("/api", postRoutes)

// DATABASE + SERVER

const startServer = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/socialmedia")
    console.log("Connected to MongoDB")

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error("Could not connect to MongoDB", err)
    process.exit(1)
  }
}

startServer()
