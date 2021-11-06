const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const app = express();
const PORT = 4000;

// connect database
mongoose
    .connect("mongodb://localhost/smartedu-project", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    })
    .then(() => {
        console.log("Database successfully connected.");
    });

// template engine
app.set("view engine", "ejs");

// middlewares
app.use(express.static("public"));
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// read the json files
app.use(express.json());

// app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

// show request middleware
app.use(function (req, res, next) {
    // console.log("Request:", req.path);
    next();
});

// routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);

// show post detail
// app.get("/posts/:id", postController.getPost);
// // adding post to the site
// app.post("/posts", postController.createPost);
// // update detail of the post
// app.put("/posts/:id", postController.updatePost);
// // delete  the post
// app.delete("/posts/:id", postController.deletePost);
// // go to about page
// app.get("/about", pageController.getAboutPage);
// // go to add post page
// app.get("/add_post", pageController.getAddPostPage);
// // go to update detail of the post
// app.get("/posts/edit/:id", pageController.getEditPage);

// start the server
app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});
