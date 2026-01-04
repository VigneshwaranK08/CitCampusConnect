import { useState } from "react";
import { getAuth } from "firebase/auth"; 
import API from "../api";
import './AddPage.css'

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [pic, setPic] = useState("");
  const [message, setMessage] = useState("");


  const auth = getAuth();
  const firebaseUser = auth.currentUser;

  const userId = firebaseUser?.uid;
  const userName = firebaseUser?.displayName;

  const submitPost = async (e) => {
    e.preventDefault();

    if (!userId || !userName) {
      setMessage("Log in to create a post");
      return;
    }

    try {
      const res = await API.post("/createpost", {
        title,
        body,
        pic,
        userId,
        name: userName, 
      });

      setMessage("Post created successfully");
      setTitle("");
      setBody("");
      setPic("");
      console.log(res.data);
    } catch (err) {
      setMessage(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="APContainer">
      <h2>Create Post</h2>

      <form onSubmit={submitPost}>
        <p>Post Title</p>
        <input
          className="PostTitle"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <p>Post Content</p>
        <textarea
          className="PostBody"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <p>Post Image url</p>
        <input
          className="PostImg"
          type="text"
          placeholder="Image URL"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
          required
        />

        <button type="submit">Create Post</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
