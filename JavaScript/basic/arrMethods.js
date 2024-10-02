const fruit=[{name:"apple",color:"red"},{name:"banana",color:"yellow"},{name:"cherry",color:"red"}];

fruit.forEach((curr,index,array)=>{
    console.log(curr,index,array);
});

const cart=[
    {name:"laptop",price:1000,qty:1},
    {name:"phone",price:800,qty:2},
    {name:"rtx3060",price:2000,qty:3}
]
let totalCost=0;
cart.forEach(item=>{
    totalCost+=item.price*item.qty;
});
console.log(totalCost);

const discountCart=cart.map(item=>{
    return{
        name:item.name,
        price:item.price*0.85,
        qty:item.qty
    };
});

console.log(discountCart);
const tasks=[
    {id:1,desc:"play games",complete:true},
    {id:2,desc:'Go to GYM',complete:true},
    {id:3,desc:"study",complete:false}
];
const indexToRemove=tasks.findIndex((item)=>{
    return item.complete===false;
});
console.log(indexToRemove);
if(indexToRemove!==-1){
    const [notComplete]=tasks.splice(indexToRemove,1);
    console.log(notComplete);
    tasks.splice(0,0,notComplete);
}
console.log(tasks);





