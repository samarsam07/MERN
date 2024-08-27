// String Concatenation 

// using + operator

const firstName=`John`;
const lastName=`Doe`;
const fullName=firstName+" "+lastName;
console.log(fullName);

// using concat() method

const str1=`Hello`;
const str2=`World`;
const combineStr=str1.concat(" ",str2);
console.log(combineStr);

// using template literals

const fruit=`apple`;
const color=`red`;
const sentence=`The ${fruit} is ${color}`;
console.log(sentence);

// tolowercase method and touppercase method

const lowerStr="hello world";
const result1=lowerStr.toUpperCase();

const upperStr="HELLO WORLD";
const result2=upperStr.toLowerCase();