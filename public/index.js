const express = require('express');
const router = express.Router();
const path = require('path');

  // sends game.html
  router.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/Main/game.html'))
  })

module.exports = router;