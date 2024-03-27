import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../public/navbar.css";
import { logout } from "./store/";

const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const auth = useSelector((state) => state.auth);

  return (
    <nav className="navbar">
      <div className="nav-brand">Distributed System</div>
      <ul className="nav-links">
        <li>
          <a to="/publish" className="nav-link">
            Publish
          </a>
        </li>
        <li>
          <a to="/subscribe" className="nav-link">
            Subscribe
          </a>
        </li>
        {auth.id ? (
          <li>
            <button onClick={handleLogout} className="nav-logout">
              Logout
            </button>
          </li>
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
