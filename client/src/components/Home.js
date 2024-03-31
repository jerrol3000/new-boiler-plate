import React from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "#f0f0f0",
};

const contentStyle = {
  textAlign: "center",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  background: "#fff",
};

const Home = () => {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1>Welcome to Our Website</h1>
        <p>This is a dummy home page created with React and inline CSS.</p>
      </div>
    </div>
  );
};

export default Home;
