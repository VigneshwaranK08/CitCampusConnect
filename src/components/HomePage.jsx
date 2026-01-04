import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import SearchBar from "./SearchBar";
import EventsCard from "./EventsCard";
import EventPopup from "./EventPopup";
import { getEvents } from "./eventsService";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState({}); // per-post input

  const auth = getAuth();
  const firebaseUser = auth.currentUser;

  const userId = firebaseUser?.uid;
  const userName = firebaseUser?.displayName || "Unknown User";

  useEffect(() => {
    fetch("http://localhost:5000/api/allpost")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.posts)) setPosts(data.posts);
      })
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  const updatePostInState = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((p) => (p._id === updatedPost._id ? updatedPost : p))
    );
  };

  const likePost = async (postId) => {
    try {
      const res = await fetch("http://localhost:5000/api/like", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, userId }),
      });
      const updatedPost = await res.json();
      updatePostInState(updatedPost);
    } catch (err) {
      console.error("Like failed:", err);
    }
  };

  const unlikePost = async (postId) => {
    try {
      const res = await fetch("http://localhost:5000/api/unlike", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, userId }),
      });
      const updatedPost = await res.json();
      updatePostInState(updatedPost);
    } catch (err) {
      console.error("Unlike failed:", err);
    }
  };
  
  const makeComment = async (text, postId) => {
    if (!text) return;

    try {
      const res = await fetch("http://localhost:5000/api/comment", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId,
          userId,
          text,
          name: userName,
        }),
      });
      const updatedPost = await res.json();
      updatePostInState(updatedPost);

      
      setCommentText((prev) => ({ ...prev, [postId]: "" }));
    } catch (err) {
      console.error("Comment failed:", err);
    }
  };

  const getPostAuthorName = (post) => {
    if (!post.postedBy) return "Unknown User";
    if (typeof post.postedBy === "object" && post.postedBy.name)
      return post.postedBy.name;
    return "Unknown User";
  };

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
  <>
    <div className="main-content">
      <div className="feed-section">
        <SearchBar />

        {posts.length > 0 ? (
          posts.map((post) => {
            const isLiked =
              Array.isArray(post.likes) && post.likes.includes(userId);
            const authorName = getPostAuthorName(post);

            return (
              <div key={post._id} className="post-card">
                <h4>{authorName}</h4>

                <p>
                   {post.body || ""}
                </p>
                {post.photo && <img src={post.photo} alt="post" />}

                <div className="post-actions">
                  {isLiked ? (
                    <button onClick={() => unlikePost(post._id)}>❤ Unlike</button>
                  ) : (
                    <button onClick={() => likePost(post._id)}>🤍 Like</button>
                  )}
                  <span>{post.likes?.length || 0} likes</span>
                </div>

                <h4>Comments :</h4>
                {post.comments?.map((c, idx) => (
                  <p key={idx}>
                    <b>{c.name || "Unknown User"}</b> {c.text}
                  </p>
                ))}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    makeComment(commentText[post._id], post._id);
                  }}>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={commentText[post._id] || ""}
                    onChange={(e) =>
                      setCommentText({ ...commentText, [post._id]: e.target.value })
                    }/>
                </form>
              </div>
            );
          })
        ) : (
          <p>No posts yet</p>
        )}
      </div>


      <div className="side-section">
        <EventsCard
          title="Upcoming Events"
          events={events}
          onEventClick={setSelectedEvent}
        />
      </div>
    </div>
    <EventPopup
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
  </>
  );
}
