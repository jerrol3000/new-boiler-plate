import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/navbar.css";
import { logout } from "../redux/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const auth = useSelector((state) => state.auth);

  return (
    <nav className="navbar">
      <div className="nav-brand">My app</div>
      <ul className="nav-links">
        <li>
          <a to="/home" className="nav-link">
            Home
          </a>
        </li>
        {auth.id ? (
          <>
            <li>
              <span className="nav-username">Welcome, {auth.username}</span>
            </li>
            <li>
              <button onClick={handleLogout} className="nav-logout">
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <a to="/login" className="nav-link">
              Login
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
