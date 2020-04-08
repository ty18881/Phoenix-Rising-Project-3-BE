const express = require("express");
const templates = express.Router();

const Template = require("../models/template.js");
const seedData = require("../models/seed_template.js");

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

/**
  * SEED ROUTE - push items into the database for testing
  */
 templates.get("/seed", (req,res) => {
    
  Template.insertMany(seedData, (err, templates) => {
      if (err) { 
          console.log(`Error Seeding the Database: ${err}`);
      } else {
          console.log("Template Controller - Added template data provided", templates);
          console.log(templates);
          
      }
      
      res.send("Template Controller - Template Seeding Executed!");
  });
});

module.exports = templates;