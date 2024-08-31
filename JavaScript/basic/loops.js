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

// reduce method 
const numbers=[1,2,3,4,5,6];
const sum=numbers.reduce(function(acc,curr){
    return acc+curr;
},0);
console.log(sum);
// frequence cnt

const fruit=['apple','banana','apple','banana','apple','kiwi','mango'];
const fruitCnt=fruit.reduce(function(acc,curr){
 if(acc[curr]){
    acc[curr]+=1;
 }else{
    acc[curr]=1;
 }
 return acc;
},{})
console.log(fruitCnt);
