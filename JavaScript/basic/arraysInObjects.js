// Array in object
const todoList={
    title:"ToDo List",
    tasks:[
        {id:1,desc:"play games",complete:false},
        {id:2,desc:'Go to GYM',complete:true},
        {id:3,desc:"study",complete:false}
    ]
};
const allTask=todoList.tasks;
console.log(allTask);

// function to add task

const addTask=(desc)=>{
// add new Id
const newId=todoList.tasks.length+1;
const newTask={id:newId,desc,complete:false};
// push into taks array
todoList.tasks.push(newTask);
}

addTask("sleep")
console.log(todoList.tasks);

// update task

const markAsComplete=(id)=>{
    // find task
    const found=todoList.tasks.find((task)=>{
        return task.id==id
    });
    if(found){
        found.complete=true;
    }else{
        console.log(`task not found`);
    }
}

// update
markAsComplete(3);
console.log(todoList.tasks);
