/** SEIR FLEX Phoenix Rising
 * Project 3
 * Giggle Libs
 */

 require("dotenv").config();
 const express = require("express");
 const mongoose = require("mongoose");
 const cors = require("cors");

 const app = express();

 /** Database disconnection or error messages */

 mongoose.connection.on("error", err => console.log(err.message + "is MongoDB not running?"));

 mongoose.connection.on("disconnected", () => console.log("MongoDB disconnected"));

/** Connect to the Database */

mongoose.connect(process.env.MONGODB_URI, {     
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

/** Middleware */
// API will return and accept JSON only

app.use(express.json());

/** CORS Middleware */
// Need to update the whitelist with our production front-end URL
const whitelist = ["http://localhost:3000"];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) != -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}

// for dev - keeping access wide open
app.use(cors());

// for production, use the whitelist

// app.use(cors(corsOptions));

/**Models */



/** Controllers */
const templatesController = require("./controllers/templates.js");

app.use("/templates", templatesController);

/** Listener */

app.listen(process.env.PORT, () => {
    console.log("Giggles can be found on port: ", process.env.PORT);
})