import { useState } from "react";
import logo from "../assets/Group-3.svg"

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>CIT Campus Connect</span>
    </div>

      <div className="nav-icons">
        {["home", "feed", "add", "chat", "profile"].map((item) => (
          <div
            key={item}
            className={`nav-item ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            <span className="material-symbols-rounded">
              {item === "home"
                ? "home"
                : item === "feed"
                ? "dynamic_feed"
                : item === "add"
                ? "add_circle"
                : item === "chat"
                ? "chat"
                : "person"}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}
