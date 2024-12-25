const express = require("express");
// import userRouter

// istance of express router
const userRouter = express.Router();

userRouter.get("", (req, res) => {
    res.json({
        status: "success",
        message: "all users data",
    });
})
// getting a user
userRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        status: "success",
        message: `user with id ${id} found`,
    });
});
// updating a user
userRouter.put("/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        status: "success",
        message: `user with id ${id} updated`,
    });
});
// deleting a user
userRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        status: "success",
        message: `user with id ${id} deleted`,
    });
});
// exporting the router
module.exports = userRouter;