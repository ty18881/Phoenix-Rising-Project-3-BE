const express = require('express');
const router = express.Router();
const User = require('../models/users');
const usersCtrl = require('../controllers/users.js')

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/




module.exports = router;