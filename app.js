const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");

const app = express();
const PORT = 3003;

// connect database
mongoose
  .connect("mongodb://localhost/smartedu-project", {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("Database successfully connected.");
  }).catch((err)=>{
    console.log(`Database connection error: ${err}`);
    
  });

// template engine
app.set("view engine", "ejs");

// global variable
global.userIN = null;

// middlewares
app.use(express.static("public"));
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// read the json files
app.use(express.json());
// session settings
app.use(
  session({
    secret: "my_keyboard_cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost/smartedu-project",
    }),
  })
);
// use global key for if user logged in to the site then behave this situation
app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});

// show request middleware
app.use(function (req, res, next) {
  // console.log("Request:", req.path);
  next();
});

// routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);


// start the server
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
