const express = require('express');
const router = express.Router(); // Capital "R" in Router()
const chatbotController = require('../controllers/chatbotController'); // Missing closing quote

router.post('/query', chatbotController.handleQuery);

module.exports = router;
