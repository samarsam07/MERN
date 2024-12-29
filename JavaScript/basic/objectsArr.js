// reference 
const person1={name:`john`,age:20};
// console.log(`person1`,person1);
const person2=person1;
person2.age=30;
// console.log(`person2`,person2);
// console.log(`person1`,person1);

// passing object to a function
const incrementAge=(obj)=>{
    obj.age+=1;
}
const user={name:"user",age:20};
// console.log("before",user);
incrementAge(user);
// console.log("after",user);


// Array of objects

const student=[{name:"bob",id:1},{name:"john",id:2},{name:"doe",id:3}];
console.log(student[0]);

// Add new atudent
const addStudent=(name,id)=>{
    const newStudent={name,id};
    // push new Student in array;
    student.push(newStudent);

}
addStudent("Alice",4);
// console.log(student);

// update student function

const updateStudent=(id,newName)=>{
    // finding student by id
    const found=student.find((stud)=>{
        return stud.id==id;
    });
    if(found){
        found.name=newName;
    }else{
        console.log(`student not found`);
    }
}
updateStudent(2,`sam`);
console.log(student);









