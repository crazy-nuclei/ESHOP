const express = require('express');
const router = express.Router();
const { authUser, getUserProfile, registerUser } = require('../controllers/userControllers');
const protect = require('../middleware/auth');


// @desc POST authenticate and login using web token
// @route /api/users/login
// @access public

router.post('/login', authUser);


// @desc GET get user profile
// @route /api/users/profile
// @access private

router.get('/profile', protect, getUserProfile);


// @desc POST register a new user
// @route /api/users
// @access public

router.post('/', registerUser);



module.exports = router;