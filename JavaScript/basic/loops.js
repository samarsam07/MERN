// For loop
for(let i=1;i<=1;i++){
    console.log(i);    
}
// print array

const arr=['apple','banana','kiwi','orange'];
for(let i=0;i<arr.length;i++){
    // console.log(arr[i]);
}
// ForEach Loop
// syntax 1

const number=[1,2,3,4,5,6];
number.forEach(function(element,index,array){
    // console.log(element,index,array);
    
})
// syntax 2
arr.forEach(element => {
    // console.log(element);
    
});
// map method 
const num=[100,200,300,150,250,321];

const newNum=num.map(function(nums,index){
    return {nums,index};
})
console.log(newNum);
// filter method
const numb=[1,23,4,5,6,74,32];
const evenNum=numb.filter(function(num){
    return num%2===0;
})
console.log(evenNum);

