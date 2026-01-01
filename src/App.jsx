import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import EventsPage from "./components/EventsPage";

function App() {

  const [active, setActive] = useState('home')

  return (
    <div className="app-wrapper">
      <Navbar active={active} setActive={setActive} />

      {active === "home" && <HomePage />}
      {active === "feed" && <EventsPage />}
      
    </div>
  );
}

export default App;