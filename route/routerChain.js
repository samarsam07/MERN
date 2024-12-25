const express = require("express");
// import userRouter

// istance of express router
const userRouter = express.Router();

userRouter.route("/").get((req,res)=>{
    res.json({
        status: "success",
        message: "all users data",
    });
});

// getting a user
userRouter.route("/:id").get((req,res)=>{
    const id = req.params.id;
    res.json({
        status: "success",
        message: `user with id ${id} found`,
    });
}).put((req,res)=>{
    const id = req.params.id;
    res.json({
        status: "success",
        message: `user with id ${id} updated`,
    });
}).delete((req,res)=>{
    const id = req.params.id;
    res.json({
        status: "success",
        message: `user with id ${id} deleted`,
    });
})

// exporting the router
module.exports = userRouter;