const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");

// CREATE POST
router.post("/createpost", async (req, res) => {
  const { title, body, pic, userId, name } = req.body;

  if (!title || !body || !pic || !userId || !name)
    return res.status(422).json({ error: "All fields required" });

  try {
    const post = new Post({
      title,
      body,
      photo: pic,
      postedBy: {
        uid: userId,       // Firebase UID
        name: name,        // Firebase displayName
      },
    });

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// LIKE POST
router.put("/like", async (req, res) => {
  const { postId, userId } = req.body;
  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    if (!post.likes.includes(userId)) post.likes.push(userId);
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UNLIKE POST
router.put("/unlike", async (req, res) => {
  const { postId, userId } = req.body;
  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    post.likes = post.likes.filter((id) => id !== userId);
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// COMMENT
router.put("/comment", async (req, res) => {
  const { postId, userId, text, name } = req.body;
  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    post.comments.push({ text, postedBy: userId, name });
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL POSTS
router.get("/allpost", async (req, res) => {
  try {
    const posts = await Post.find().sort("-createdAt");
    res.json({ posts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
