import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Newspaper from "./pages/Newspaper";
import AddArticle from "./pages/AddArticle";
import Profile from "./pages/Profile";
import "./index.css";

function Home() {
  return (
    <div style={{ textAlign: "center", paddingTop: "40px" }}>
      <h1>HomePage 1</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
