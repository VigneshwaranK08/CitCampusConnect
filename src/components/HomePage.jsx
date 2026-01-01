import React from 'react'
import SearchBar from "./SearchBar";
import PostCard from "./PostCard";
import EventsCard from "./EventsCard";

function HomePage() {
  return (
    <div className="main-content">
        <div className="feed-section">
          <SearchBar />

          <PostCard
            title="Sanjay Srinivas"
            time="2 mins ago"
            text="Lorem ipsum is simply dummy text used in printing."
          />
          <PostCard
            title="Vijay Prakash"
            time="10 mins ago"
            text="Upcoming assignment circular updated."
          />
        </div>

        <div className="side-section">
          <EventsCard 
    title="Upcoming Events"
    events={[
        { name: "Appathon", date: "Dec 02, 10:00 AM", club: "Celestius"},
        { name: "Workshop: AI & ML", date: "Dec 05, 2:00 PM", club: "Assymetric" },
        { name: "UI/UX on the Spot", date: "Dec 16, 10:30 AM", club: "Tezos"},
        { name: "Pongal", date: "Jan 16, 9:00 AM", club: "Immerse"}
    ]}
/>
        </div>
      </div>
  )
}

export default HomePage