import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "../public/style.css";
import { authenticate } from "./store/authSlice";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    !!auth.id && navigate("/subscribe");
    !!auth.id && console.log("login happened");
  }, [auth, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!username.trim() || !password.trim()) {
        alert("Please fill out all required fields.");
      }

      if (!isLogin) {
        if (!email.trim()) {
          alert("Please provide an email address.");
        }
        if (password !== confirmPassword) {
          alert("Passwords do not match.");
        }
      }

      setError("");

      const formData = isLogin
        ? { username, password }
        : { username, password, email };

      // Submit form data
      const url = isLogin ? "/login" : "/register";
      await axios.post(url, formData);
      dispatch(authenticate(formData));

      // Clear form fields after successful submission
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");

      // Optionally handle login or registration success here
    } catch (error) {
      console.error("Error:", error);
      setError(error.message); // Set error message
    }
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
    setUsername("");
    setPassword("");
    setEmail("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <div className="form-container">
      <h1 className="form-header">{isLogin ? "Login" : "Register"}</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="form">
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
        {!isLogin && (
          <>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>
          </>
        )}
        <button type="submit" className="form-button">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p onClick={handleToggleForm} className="toggle-link">
        {isLogin
          ? "I don't have an account, Register"
          : "I already have an account, Login"}
      </p>
    </div>
  );
};

export default Auth;
