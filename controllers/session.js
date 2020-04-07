const express = require('express');
const session = express.Router();
const bcrypt = require('bcrypt')

const User = require('../models/users.js');

session.delete('/', (req, res)=>{
    req.session.destroy( () => {
        res.redirect('/')
    });
});

session.post("/", (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      console.log
      req.session.currentUser = foundUser;
      let user = { ...foundUser._doc };
      delete user.password;
      res.status(201).json(user);
    } else {
      res.status(404).json({ error: "Incorrect username or password" });
    }
  });
});

module.exports = session;
