import React, { useState } from "react";
import "../public/style.css";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make POST request to backend for user login or registration based on isLogin state
    if (isLogin) {
      // Handle login
    } else {
      // Handle registration
    }
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-container">
      {" "}
      {/* Use className instead of style attribute */}
      <h1 className="form-header">{isLogin ? "Login" : "Register"}</h1>
      <form onSubmit={handleSubmit} className="form">
        {" "}
        {/* Use className instead of style attribute */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p onClick={handleToggleForm} className="toggle-link">
        {" "}
        {/* Use className instead of style attribute */}
        {isLogin
          ? "I don't have an account, Register"
          : "I already have and account, Login"}
      </p>
    </div>
  );
};

export default Auth;
