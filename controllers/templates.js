const express = require("express");
const templates = express.Router();

const Template = require("../models/template.js");

/** INDEX Route */

templates.get("/", (req,res) => {
    res.send("Templates.js Controller - INDEX Route");
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