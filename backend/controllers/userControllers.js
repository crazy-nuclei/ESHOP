const User = require('../models/userSchema');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && await user.matchPassword(password)) {

        const token = generateToken(user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token
        })
    } else {
        res.status(401);
        throw new Error('Invalid Credentials')
    }

})

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }
    else {
        res.status(404);
        throw new Error('No User Found');
    }
})

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    console.log(email);
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User with this email already exists');
    }

    const user = await User.create({
        name, email, password
    })

    if (user) {

        const token = generateToken(user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token
        })
    } else {
        res.json(400);
        throw new Error('Invalid User data');
    }


})

module.exports = { authUser, getUserProfile, registerUser };