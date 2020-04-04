const express = require('express')
<<<<<<< HEAD
const users = express.Router()
const User = require('../models/users.js')

users.get('/new', (req, res) => {
  res.render('users/new.ejs')
})

users.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err)
    }
    console.log(createdUser);
    res.redirect('/')
  })
})

module.exports = users
=======
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
>>>>>>> 7c4fee3dcb002a3e8d9f211acdc5b64a6b3a087a
