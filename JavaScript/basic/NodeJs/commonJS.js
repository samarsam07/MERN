// ways of exporting modules in csjs

// single function export

// const username="john";

const sayHello=(name)=>{
    console.log(`hello,${name}`);
}

// module.exports=sayHello;  

// object export

module.exports={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    }
}
