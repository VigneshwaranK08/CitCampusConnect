import { useState } from "react";
import { getAuth } from "firebase/auth"; 
import API from "../api";

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
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Create Post</h2>

      <form onSubmit={submitPost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        <input
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
