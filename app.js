const express=require('express');

// create a instance of express
const app=express();
// create a port
const PORT=8082;


// create a route
app.get("/",(req,res)=>{
    res.send("Hello World");
})
// start the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

