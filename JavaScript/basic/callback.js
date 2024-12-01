function myCallBack(){
    console.log("hello this is a simple callback function");
    
}

function logMessage(callback){
    callback();

}

// calling callback func
logMessage(myCallBack);

// another way to call

logMessage(function(){
    console.log("another way to call a callback function");
    
})