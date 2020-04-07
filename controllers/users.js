const User = require('../models/users');
const bcrypt = require('bcrypt')
const express = require('express');
const user = express.Router();


user.get('/', (req, res) => {
  User.find({}, (err, foundUsers) => {
    if (err) {
     res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundUsers)
  })
})

user.post("/", (req, res) => {
  console.log("User Controller" + req.body.username)
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10),
  );
 
  User.create(req.body, (err, createdUser) => {
  });
});

module.exports = user;