const mongoose = require("mongoose");


const giggleLibSchema = mongoose.Schema({

    name: {type: String, required: true},
    owner: {type: String, required: true},
    text: {type: String, required: true},
    source_template: {type: String, required: true}
})
module.exports = mongoose.model("GiggleLib", giggleLibSchema);