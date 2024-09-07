function greeting() {
    console.log("Hello, World!");
}
function currentDate() {
    let currDate=new Date();
    console.log(`Today Date : ${currDate}`);
}
greeting();
currentDate();
// Function Expression

const sayHello=function(){
    console.log("Hello");
}
sayHello();

// immediately invoke function expression

(function(){
    const num=4;
    if(num%2===0){
        console.log("even");
    }else{
        console.log("odd");
    }
})();