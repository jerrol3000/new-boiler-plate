import React, { useState } from "react";
import "../public/publish.css";

const Publish = () => {
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make POST request to backend to publish message
  };

  return (
    <div className="publish-container">
      <h2 className="publish-header">Publish Message</h2>
      <form onSubmit={handleSubmit} className="publish-form">
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="publish-input"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="publish-textarea"
        ></textarea>
        <button type="submit" className="publish-button">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Publish;
