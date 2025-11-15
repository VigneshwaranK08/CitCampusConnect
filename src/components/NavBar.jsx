import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();

  return (
    <div className="NavBar">
      <Link to="/" className="navbar-logo" title="Home">
        <img src="../../src/assets/appLogo.svg" alt="AppLogo" height="64px" />
      </Link>
      <Link to="/" className="navbar-title" title="Home">
        <h1 className="HeadLine">Campus Connects</h1>
      </Link>
      <div className="links">
        <ul>
          <li>
            <Link to="/" title="Home">
              <img src="../../src/assets/house.svg" alt="Home" />
            </Link>
          </li>
          <li>
            <Link to="/newspaper" title="Newspaper">
              <img src="../../src/assets/newspaper.svg" alt="Newspaper" />
            </Link>
          </li>
          <li>
            <Link to="/add-article" title="Add Article">
              <img src="../../src/assets/plus.svg" alt="Add Article" />
            </Link>
          </li>
          <li>
            <img src="../../src/assets/comment.svg" alt="" />
          </li>
          <li>
            <Link to="/profile" title="Profile">
              <img src="../../src/assets/user.svg" alt="Profile" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-actions">
        <Link
          className={`auth-link ${
            location.pathname === "/signin" ? "active" : ""
          }`}
          to="/signin"
        >
          Sign In
        </Link>
        <Link
          className={`auth-cta ${
            location.pathname === "/signup" ? "active" : ""
          }`}
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
