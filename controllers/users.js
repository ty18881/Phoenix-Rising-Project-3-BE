const express = require('express')
const user = express.Router()
const User = require('../models/users.js')

user.get('/new', (req, res) => {
  res.render('users/new.ejs')
})

user.post('/', (req, res) => {
    //overwrite the user password with the hashed password, then pass that in to our database
      req.body.username = req.body.username
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
      User.create(req.body, (err, createdUser) => {    
            res.redirect('/')
        });
    });
      

module.exports = user