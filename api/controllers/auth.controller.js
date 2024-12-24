const User = require('../models/user.model.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const signUp =async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save()
        res.status(201).json('User created');
    }
     catch (error) {
        res.status(400).json(error.message);
    }
}    

module.exports = { signUp }