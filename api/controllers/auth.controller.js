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

const google = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(user){
            //register the user if the user exists
            //to register we need to create a token and save this token in the cookie
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

            //then we want to seperate the password from the user object
            const {password: pass, ...rest} = user._doc;
            res
                .cookie('access_token', token, {httpOnly: true})
                .status(200)
                .json(rest);

        }
        else{
            //create the user if the user does not exist

            const generatedPassword = Math.random().toString(36).slice(-8);
            const hashedPassword = bcrypt.hashSync(generatedPassword, 10);

            const newUser = new User({
                username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4),
                email: req.body.email,
                password: hashedPassword,
                avatar: req.body.photo
            });

            await newUser.save();
            const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
            const {password: pass, ...rest} = newUser._doc;
            res
                .cookie('access_token', token, {httpOnly: true})
                .status(200)
                .json(rest);
                
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { signUp, signIn, google }