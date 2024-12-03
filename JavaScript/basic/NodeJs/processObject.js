// process object

// environment variable
const env = process.env.APP_ENV || 'development';
// console.log(env); // development

// process.exit()

if (process.env.NODE_ENV!=="production") {
    // console.log("this code should run in production only");
    // process.exit();
}

// current working dirtory 
const cwd = process.cwd();
console.log(cwd); // /Users/username/Desktop/nodejs/nodejs-basics   