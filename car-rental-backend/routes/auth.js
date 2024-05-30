const express = require('express');
const { register, login, getUserRentals } = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/orders', authenticateToken, getUserRentals);

module.exports = router;
