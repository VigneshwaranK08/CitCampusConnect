const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    photo: { type: String, required: true },
    likes: [String], // Firebase UID
    comments: [
      {
        text: String,
        postedBy: String, // Firebase UID
        name: String,     // Firebase displayName
      },
    ],
    postedBy: {
      uid: { type: String, required: true }, // Firebase UID
      name: { type: String, required: true }, // Firebase name
    },
  },
  { timestamps: true }
);

mongoose.model("Post", postSchema);
