const { log } = require('console');
const fs=require('fs');

// console.log(fs);

// read a file
// synchronous
const dataBuffer =fs.readFileSync("./sample.txt");
const content=dataBuffer.toString();
// console.log(content);

// asynchronous
fs.readFile("./sample.txt","utf-8",(err,content)=>{
    if (err) {
        console.log(err);
        throw err;
    }else{
        // console.log(content);
    }
})

// write in file

// asynchronous
// fs.writeFile("./new.txt","Hello world",(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }else{
//         console.log("file has been written");
//     }
// });

// delete a file

fs.unlink("./new.txt",(err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log("file has been deleted");
    }
})