const express = require("express");

// istance of express
const app = express();
//recieve incoming data from client
app.use(express.json());
const PORT = 3000;
const animes = [
  {
    id: 1,
    title: "bleach",
    author: "kubo",
  },
  {
    id: 2,
    title: "dandadan",
    author: "cope",
  },
  {
    id: 3,
    title: "AoT",
    author: "kodama",
  },
];
// request Handler

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "welcome to Anime binge",
  });
});
// route for all data

app.get("/anime", (req, res) => {
  res.json({
    status: "Success",
    message: "all anime data",
    list: animes,
  });
});
// fetch a anime
app.get("/anime/:id", (req, res) => {
  const id = req.params.id;
  const anime = animes.find((anime) => anime.id == id);
  if (anime) {
    res.json({
      status: "success",
      message: "anime fetch successfully",
      data: anime,
    });
  } else {
    res.json({
      status: "failure",
      message: "anime not found",
    });
  }
});
// add a new anime
app.post("/anime", (req, res) => {
  const newAnime = req.body;
  animes.push(newAnime);
  res.json({
    status: "success",
    message: "anime is added successfully",
    data: animes,
  });
});

// start server

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
