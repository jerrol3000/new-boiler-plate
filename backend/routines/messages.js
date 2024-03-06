const express = require('express');
const router = express.Router();
const kafkaProducer = require('../kafka');

// Publish message to Kafka topic
router.post('/publish', async (req, res) => {
  try {
    const { topic, message } = req.body;

    const payloads = [
      { topic, messages: JSON.stringify(message) }
    ];

    kafkaProducer.send(payloads, (error, data) => {
      if (error) {
        console.error('Error publishing message to Kafka:', error);
        res.status(500).json({ message: 'Failed to publish message' });
      } else {
        console.log('Message published to Kafka:', data);
        res.status(200).json({ message: 'Message published successfully' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Subscribe to Kafka topic
router.post('/subscribe', async (req, res) => {
  try {
    const { topic } = req.body;

    // Implement Kafka consumer logic here

    res.status(200).json({ message: 'Subscribed to topic successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
