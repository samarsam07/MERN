const express = require("express");
const postRouter = express.Router();

postRouter.get("", (req, res) => {
  res.json({
    status: "success",
    message: "all posts data",
  });
});
// getting a post
postRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    status: "success",
    message: `post with id ${id} found`,
  });
});
// updating a post
postRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    status: "success",
    message: `post with id ${id} updated`,
  });
});
// deleting a post
postRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    status: "success",
    message: `post with id ${id} deleted`,
  });
});
// exporting the router
module.exports = postRouter;
