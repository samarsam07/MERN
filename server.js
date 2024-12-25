const express =require('express');
// import userRoute
const userRouter = require('./route/userRoute');
// import postRoute
const postRouter = require('./route/postRouter');

const app = express();
app.use(express.json());
const PORT = 3000;

// home route

app.get('/',(req,res)=>{
    res.json({
        status:'success',
        message:'welcome to Anime binge'
    });
});
// route for all data
app.use('/users',userRouter);
// post route
app.use('/posts',postRouter);

// start server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});