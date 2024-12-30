const express = require('express');
const { signUp, google, signOut } = require('../controllers/auth.controller');
const { signIn } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/signup',signUp )
router.post('/signin',signIn )
router.post('/google', google )
router.get('/signout', signOut )


module.exports = router;