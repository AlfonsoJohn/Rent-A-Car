const express = require('express');
const { getRentals } = require('../controllers/rentalController');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, getRentals);

module.exports = router;

