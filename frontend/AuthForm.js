import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/authSlice";
import { useNavigate } from "react-router-dom";
import "../public/style.css";

const AuthForm = ({ formName, displayName, error }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [passwordMatchError, setPasswordMatchError] = useState(null);

  useEffect(() => {
    !!auth.id && navigate("/publish");
  }, [auth, navigate]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email = evt.target.email.value.toLowerCase();
    const password = evt.target.password.value;
    let username;
    let confirmPassword;
    if (formName === "signup") {
      username = evt.target.username.value;
      confirmPassword = evt.target.confirmPassword.value;

      // Check if passwords match
      if (password !== confirmPassword) {
        setPasswordMatchError("Passwords do not match.");
        return;
      }
    }
    dispatch(authenticate({ email, password, username, formName }));
  };

  return (
    <div className="form-container">
      <h1 className="form-header">{displayName}</h1>
      <form onSubmit={handleSubmit} name={formName}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          autoComplete="email"
          autoFocus
          className="form-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          className="form-input"
        />
        {formName === "signup" && (
          <>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              autoComplete="current-password"
              className="form-input"
            />
            <input
              type="text"
              name="username"
              placeholder="User Name"
              autoComplete="family-name"
              className="form-input"
            />
          </>
        )}
        <button type="submit" className="form-button">
          {displayName}
        </button>
        {error && error.response && (
          <p className="error-message">{error.response.data}</p>
        )}
        {passwordMatchError && (
          <p className="error-message">{passwordMatchError}</p>
        )}
      </form>
      <div>
        {formName === "login" ? (
          <a href="/signup" className="toggle-link">
            I don't have an account, signup
          </a>
        ) : (
          <a href="/login" className="toggle-link">
            Already have an account? Log in
          </a>
        )}
      </div>
    </div>
  );
};

export default AuthForm;

export const Signup = () => {
  const error = useSelector((state) => state.auth.error);
  return <AuthForm formName="signup" displayName="Sign Up" error={error} />;
};

export const Login = () => {
  const error = useSelector((state) => state.auth.error);
  return <AuthForm formName="login" displayName="Login" error={error} />;
};
