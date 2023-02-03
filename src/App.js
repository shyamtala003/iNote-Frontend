import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  let [isUserLoggedIn, setIsUserLoggedIn] = useState(
    localStorage.getItem("token")
  );
  return (
    <>
      <NoteState>
        <Router>
          <Navbar
            isUserLoggedIn={isUserLoggedIn}
            setIsUserLoggedIn={setIsUserLoggedIn}
          />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route
              path="/signup"
              exact
              element={<Signup setIsUserLoggedIn={setIsUserLoggedIn} />}
            />
            <Route
              path="/login"
              exact
              element={<Login setIsUserLoggedIn={setIsUserLoggedIn} />}
            />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
