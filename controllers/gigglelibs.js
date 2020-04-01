const express = require("express");
const gigglelibs = express.Router();

const GiggleLib = require("../models/gigglelib.js");

/**INDEX Route */
// until auth gets wired up, will return all 
// gigglelibs. Afterward, will only return gigglelibs 
// owned by the user who is logged in.

gigglelibs.get('/', (req, res) => {
    GiggleLib.find({}, (err, foundGiggleLib) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundGiggleLib)
    })
  });


/**CREATE Route */
gigglelibs.post("/", (req,res) => {
    GiggleLib.create(req.body, (error, newGiggleLib) => {
        if (error) {
            res.status(400).json({ error: error.message})
        }

        res.status(200).json(newGiggleLib);
    })
})

/**DELETE Route */

gigglelibs.delete('/:id', (req, res) => {
    GiggleLib.findByIdAndRemove(req.params.id, (err, deletedGiggleLib) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(deletedGiggleLib)
    })
  });

  /**UPDATE Route */
gigglelibs.put('/:id', (req, res) => {
    GiggleLib.findByIdAndUpdate(req.params.id, 
      req.body, 
      { new: true }, 
      (err, updatedGiggleLib) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedGiggleLib)
    })
  });

module.exports = gigglelibs;