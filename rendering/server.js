// const express = require("expressjs");
const express = require("express");
const ejslayout = require("express-ejs-layouts");
const path = require("path");
const app = express();
const port = 8082;

app.use(express.static(path.join(__dirname, "public")));
// set view engine
app.set("view engine", "ejs");
// app.use(ejslayout);
// set views path
// app.set("layouts","layouts/main-layout");
// app.set("views", path.join(__dirname, "view"));


//home page
app.get("/", (req, res) => {
  res.render("home.ejs");
});
// about page
app.get("/about", (req, res) => {
  // res.sendFile(path.join(__dirname, "view", "about.html"));
  res.render("about.ejs");
});
// contact page
app.get("/contact", (req, res) => {
  // res.sendFile(path.join(__dirname, "view", "contact.html"));
  res.render("contact.ejs");
});
// gallery page
app.get("/gallery", (req, res) => {
  // res.sendFile(path.join(__dirname, "view", "gallery.html"));
  res.render("gallery.ejs");
});
// rendering userdata
app.get("/userdata", (req, res) => {
  // res.sendFile(path.join(__dirname, "view", "gallery.html"));
  // dummy user data
  const userData = {
    username: "Alice",
    age: 25,
    isPermitted: true,
    email: "alice123@gmail.com",
    islogin: false,
  };
  res.render("userData.ejs", userData);
});
// render products
app.get("/products", (req, res) => {
  // dummy products
  const products = [
    {
      name: "laptop",
      price: 999,
    },
    {
      name: "phone",
      price: 500,
    },
    {
      name: "TV",
      price: 800,
    },
  ];
  res.render("products.ejs", {products});
});
// 404 error handler
app.use((req,res,next)=>{
  const error = new Error("Page not found");
  next(error);
})
app.use((err,req,res,next)=>{
  res.render("error.ejs",{message:err.message});
})

// server listening
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
