const User = require('../models/user.model.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { errorhandler } = require('../utils/errors.js');

const signUp =async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save()
        res.status(201).json('User created');
    }
     catch (error) {
        next(error)
    }
}    

module.exports = { signUp }