const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userSchema');


const protect = asyncHandler(async (req, res, next) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        console.log(token);
        try {
            let decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id).select('-password');
            req.user = user
            console.log(user);
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized , token failed");
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Not authorized , no token");
    }

    next();

})

module.exports = protect;