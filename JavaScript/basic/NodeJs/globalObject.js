// accessing global object
// console.log(global);

// usinf setInterval and clearInterval
let count = 0;
const intervalId = setInterval(() => {
  console.log(count);
  count++;
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);

// using settimeout
setTimeout(() => {
    console.log("this message delay for 5 sec");
},5000);
