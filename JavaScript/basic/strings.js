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
// String Length

const mystr="hello world";
const len=mystr.length;

// String.slice method 
const str3="hello, world";
const ext=str3.slice(7,12);
// ? negative index slice
const phrase="Hello, World";
const ext2=phrase.slice(-6);

console.log(ext2);

// string split method
const exp="Hello World "
const split=exp.slice(" ");
//split string with mixed string
const fruits="apple:banana;pear";
const split1=fruits.split(/[:;]/); 
 
const letter="ABCDE";
const exp3=letters.split("");
// trim method
const email=`     example@gmail.com     `;
const trimEmail=email.trim();
// replace method in string
const oldText="this is old text";
const newText=oldText.replace('old','new');
// replace repititive text
const repitive='old text with old world';
const replace=repitive.replace(/old/g,'new');