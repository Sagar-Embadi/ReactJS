const express = require('express');
const { sendNewTaskEmail } = require('../services/emailService');
const router = express.Router();

// Endpoint to notify about new task
router.post('/notify-new', async (req, res) => {
  try {
    const { email, taskDetails } = req.body;
    await sendNewTaskEmail(email, taskDetails);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending new task email:', error);
    res.status(500).json({ error: 'Failed to send notification' });
  }
});

module.exports = router;