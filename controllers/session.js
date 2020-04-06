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
    console.log("received login request")
    User.findOne({ username: req.body.username }, (err, foundUser) => {
      if (foundUser && bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser;
        res.status(200).send(req.session.currentUser)
      } else {
        res.status(404).send("invalid login")
      }
    });
  });


module.exports = session;
