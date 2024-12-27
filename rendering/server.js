const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

//home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "home.html"));
});
// about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "about.html"));
});
// contact page
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "contact.html"));
});
// gallery page
app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "gallery.html"));
});
// start the server

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
