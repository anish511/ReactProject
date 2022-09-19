import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Form from "./components/Form"
import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";
import { UserProvider } from "./context/userContext"


import "./App.css";

import AuthService from "./components/services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

function App() {

    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

    return (
        <>
            <UserProvider>
                <Router >
                    <Navbar />
                    {/* <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/form' element={<Form />} />
                    </Routes> */}
                    <Routes>
                         <Route path="/" element={<Home/>} />
                         <Route path="/home" element={<Home/>} />
                         <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/user" element={<BoardUser/>} />
                        <Route path="/mod" element={<BoardModerator/>} />
                        <Route path="/admin" element={<BoardAdmin/>} />
                    </Routes>
                </Router>
            </UserProvider> 
        </>
    )
}

export default App