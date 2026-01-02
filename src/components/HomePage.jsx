import React from 'react'
import SearchBar from "./SearchBar";
import PostCard from "./PostCard";
import EventsCard from "./EventsCard";
import EventDetails from '../EventDetails.json'

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
                  {...EventDetails.card1},
                  {...EventDetails.card2},
                  {...EventDetails.card3},
              ]}
          />
        </div>
      </div>
  )
}

export default HomePage