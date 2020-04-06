/** SEIR FLEX Phoenix Rising
 * Project 3
 * Giggle Libs
 */

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcrypt');
const hashedString = bcrypt.hashSync(process.env.SECRET, bcrypt.genSaltSync(10));
const session = require('express-session');

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


app.use(session({
   secret: process.env.SECRET,
   resave: false,
   saveUninitialized: false
}));

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
// to create, update, destroy templates in our database.
// MVP - only used to seed the database
const templatesController = require("./controllers/templates.js");
const sessionController = require('./controllers/session.js');
const userController = require('./controllers/users.js');

// to create, update, destroy, show completed gigglelibs from our database.
const gigglelibsController = require("./controllers/gigglelibs.js");

app.use("/templates", templatesController);


// our application will sit under http://hostname/gigglelibs
app.use("/gigglelibs", gigglelibsController);
app.use("/users", userController);
app.use("/sessions", sessionController);
/** Listener */

app.listen(process.env.PORT, () => {
   console.log("Giggles can be found on port: ", process.env.PORT);
})