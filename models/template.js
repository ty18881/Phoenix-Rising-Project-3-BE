const mongoose = require("mongoose");


const templateSchema = mongoose.Schema({

    name: {type: String, required: true},
    text: {type: String, required: true},
    tags: [{type: String}],
    numberBlanks: {type: Number, required: true}
})

/**
 * curl -X POST -H "Content-Type: application/json" -d '{"name":"World Kindness"}' http://localhost:3003/holidays
 */
module.exports = mongoose.model("Template", templateSchema);