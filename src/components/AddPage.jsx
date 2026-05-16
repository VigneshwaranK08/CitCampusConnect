import { useState } from "react";
import { getAuth } from "firebase/auth";
import API from "../api";
import "./AddPage.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photo, setPhoto] = useState("");
  const [message, setMessage] = useState("");

  const submitPost = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    const firebaseUser = auth.currentUser;

    if (!firebaseUser) {
      setMessage("User not logged in");
      return;
    }

    const userId = firebaseUser.uid;
    const userName = firebaseUser.displayName || "Anonymous";

    if (!title || !body || !photo) {
      setMessage("All fields required");
      return;
    }
    console.log("SENDING PAYLOAD:", {
  title,
  body,
  photo,
  postedBy: {
    uid: auth.currentUser?.uid,
    name: auth.currentUser?.displayName
  }
});

    try {
      await API.post("/createpost", {
        title,
        body,
        photo,
        postedBy: {
          uid: userId,
          name: userName,
        },
      });

      setMessage("Post created successfully");

      setTitle("");
      setBody("");
      setPhoto("");
    } catch (err) {
      console.log(err);
      setMessage(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="APContainer">
      <h2>Create Post</h2>

      <form onSubmit={submitPost}>
        <p>Post Title</p>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <p>Post Content</p>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        <p>Image URL</p>
        <input
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />

        <button type="submit">Create Post</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}