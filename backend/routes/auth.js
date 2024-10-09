const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const auth = require('../middleware/auth');
const router = new express.Router();

// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Logout User
router.post('/logout', auth, logoutUser);

module.exports = router;
