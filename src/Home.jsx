import React from 'react'
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import EventsPage from "./components/EventsPage";
import ProfilePage from "./components/ProfilePage";
import AddPage from "./components/AddPage";


function Home({ user }) {

    const [active, setActive] = useState('home')

  return (
    <div className="app-wrapper">
      <Navbar active={active} setActive={setActive} />

      {active === "home" && <HomePage />}
      {active === "feed" && <EventsPage />}
      {active === "profile" && <ProfilePage user={user} />}
      {active === "add" && <AddPage/>}
      
    </div>
  )
}

export default Home