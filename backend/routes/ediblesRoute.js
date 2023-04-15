const express = require('express');
const router = express.Router();
const Edible = require('../models/edibleModel');

router.get('/getalledibles', async (req, res) => {
  try {
    const edibles = await Edible.find({});
    res.send(edibles);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;