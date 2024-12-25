const User = require('../models/user.model.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { errorhandler } = require('../utils/errors.js');
const jwt = require('jsonwebtoken');

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


const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({email});
        if (!validUser) return next(errorhandler(404, 'User not found'));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return next(errorhandler(400, 'Wrong credentials'));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);

        //now we dont want to have the password in the response
        const {password: pass, ...rest} = validUser._doc;
        
        res
            .cookie('access_token', token, {httpOnly: true})
            .status(200)
            .json(rest);
    } catch (error) {
        next(error)
    }
}

module.exports = { signUp, signIn }