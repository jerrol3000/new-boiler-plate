const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new kafka.Producer(client);

producer.on('ready', () => {
  console.log('Kafka producer is ready');
});

producer.on('error', (error) => {
  console.error('Error occurred in Kafka producer:', error);
});

module.exports = producer;
