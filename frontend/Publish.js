// Publish.js
import React, { useState } from 'react';

const Publish = () => {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make POST request to backend to publish message
  };

  return (
    <div>
      <h2>Publish Message</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default Publish;
