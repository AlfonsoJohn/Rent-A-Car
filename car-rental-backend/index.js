const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const rentalRoutes = require('./routes/rentals');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes for authentication
app.use('/auth', authRoutes);

// Routes for rentals
app.use('/rentals', rentalRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});