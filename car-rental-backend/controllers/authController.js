const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const CarRental = require('../models/carRental');

const register = async (req, res) => {
  const { username, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  await User.createUser(username, passwordHash);
  res.status(201).send('User registered');
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findUserByUsername(username);
  if (user && await bcrypt.compare(password, user.passwordHash)) {
    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
};

const getUserRentals = async (req, res) => {
  const userId = req.user.id;
  const rentals = await CarRental.findRentalsByUserId(userId);
  res.json(rentals);
};

module.exports = { register, login, getUserRentals };
