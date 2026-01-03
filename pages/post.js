const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Post = mongoose.model("Post")


// GET ALL POSTS

router.get("/allpost", (req, res) => {
    Post.find()
        .populate("postedBy", "_id name")
        .populate("comments.postedBy", "_id name")
        .sort("-createdAt")
        .then(posts => res.json({ posts }))
        .catch(err => res.status(500).json({ error: err.message }))
})


// CREATE POST

router.post("/createpost", (req, res) => {
    const { title, body, pic, userId } = req.body

    if (!title || !body || !pic || !userId) {
        return res.status(422).json({ error: "Please add all fields" })
    }

    const post = new Post({
        title,
        body,
        photo: pic,
        postedBy: userId
    })

    post.save()
        .then(result => res.json({ post: result }))
        .catch(err => res.status(500).json({ error: err.message }))
})


// GET MY POSTS

router.get("/mypost/:userId", (req, res) => {
    Post.find({ postedBy: req.params.userId })
        .populate("postedBy", "_id name")
        .then(mypost => res.json({ mypost }))
        .catch(err => res.status(500).json({ error: err.message }))
})


// LIKE POST

router.put("/like", (req, res) => {
    const { postId, userId } = req.body

    Post.findByIdAndUpdate(
        postId,
        { $addToSet: { likes: userId } },
        { new: true }
    )
    .populate("postedBy", "_id name")
    .then(result => res.json(result))
    .catch(err => res.status(422).json({ error: err.message }))
})

// UNLIKE POST
router.put("/unlike", (req, res) => {
    const { postId, userId } = req.body

    Post.findByIdAndUpdate(
        postId,
        { $pull: { likes: userId } },
        { new: true }
    )
    .populate("postedBy", "_id name")
    .then(result => res.json(result))
    .catch(err => res.status(422).json({ error: err.message }))
})


// COMMENT ON POST

router.put("/comment", (req, res) => {
    const { postId, text, userId } = req.body

    const comment = {
        text,
        postedBy: userId
    }

    Post.findByIdAndUpdate(
        postId,
        { $push: { comments: comment } },
        { new: true }
    )
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .then(result => res.json(result))
    .catch(err => res.status(422).json({ error: err.message }))
})


// DELETE POST

router.delete("/deletepost/:postId/:userId", (req, res) => {
    const { postId, userId } = req.params

    Post.findById(postId)
        .populate("postedBy", "_id")
        .then(post => {
            if (!post) {
                return res.status(404).json({ error: "Post not found" })
            }

            if (post.postedBy._id.toString() !== userId) {
                return res.status(403).json({ error: "Unauthorized" })
            }

            post.deleteOne()
                .then(result => res.json(result))
        })
        .catch(err => res.status(500).json({ error: err.message }))
})

module.exports = router
