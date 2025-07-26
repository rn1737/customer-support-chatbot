const express = require('express');
const chatbotRoutes = require('./routes/chatbotRoutes'); // Make sure the path is correct
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/chatbot', chatbotRoutes);

module.exports = app;
