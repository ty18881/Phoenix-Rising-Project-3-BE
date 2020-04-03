const express = require("express");
const templates = express.Router();

const Template = require("../models/template.js");

/** INDEX Route */

templates.get('/', (req, res) => {
    Template.find({}, (err, foundTemplate) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundTemplate)
    })
  });



/**CREATE Route  */

templates.post("/", (req,res) => {
    Template.create(req.body, (error, createdTemplate) => {
        if (error) {
            res.status(400).json({ error: error.message})
        }

        res.status(200).json(createdTemplate);
    })
})
module.exports = templates;