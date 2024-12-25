const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
// middleware
app.use((req, res, next) => {
    console.log(`request method: ${req.method} and ${new Date().toISOString()} request url: ${req.url}`);
    next();
})

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "welcome to HomePage",
  });
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    res.json({
      status: "success",
      message: "login success",
    });
  } else {
    res.json({
      status: "failure",
      message: "login failed",
    });
  }
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
