const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
    res.sendFile(('public/Main/game.html'));
})

module.exports = router;