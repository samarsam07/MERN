let check=false;
if(check){
    console.log(` ${check}`);
}
else{
    console.log(`${check}`);
}
// else if
let marks=49;
if(marks>=90){
    console.log(`Grade  :A`);
}else if(marks>=80){
    console.log(`Grade :B`);
    
}else if(marks>=70){
    console.log(`Grade :C`);
}else if(marks>=50){
    console.log(`grade :D`)
}else{
    console.log(`Grade :F`);
    
}
// Switch Case

// days 1-7 
let day=2;
switch(day){
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuseday`);
        break;
    
    case 3:
        console.log(`Wednesday`);
        break;
        
    case 4:
        console.log(`Thursday`);
        break;

    case 5:
        console.log(`Friday`);
        break;

    case 6:
        console.log(`Saturday`);
        break;

    case 7:
        console.log(`Suunday`);
        break;

    default:
        console.log(`invalid Day`);
        

}