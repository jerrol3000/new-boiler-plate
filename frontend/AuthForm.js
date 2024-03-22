import React, { useState } from "react";

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
    <div style={{ textAlign: "center" }}>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "inline-block", textAlign: "left" }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "0.5rem", marginRight: "1rem", width: "200px" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "0.5rem", marginRight: "1rem", width: "200px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p
        onClick={handleToggleForm}
        style={{
          cursor: "pointer",
          color: "red",
        }}
      >
        {isLogin
          ? "I don't have an account, Register"
          : "I already have and account, Login"}
      </p>
    </div>
  );
};

export default Auth;
