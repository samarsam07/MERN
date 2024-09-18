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
// Arrow Functions in js Es06

const multiply=(a,b) => a*b;

const result=multiply(2,3);
// block
const greet=(name)=>{
    return `hello, ${name}`;
}
const say=greet(`user`);