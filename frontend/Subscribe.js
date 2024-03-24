// Subscribe.js
import React, { useState } from "react";

const Subscribe = () => {
  const [topic, setTopic] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make POST request to backend to subscribe to topic
  };

  return (
    <div>
      <h2>Subscribe to Topic</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
