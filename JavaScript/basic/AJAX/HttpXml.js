const url="https://jsonplaceholder.typicode.com/posts"

// create a new instance

const xhr=new XMLHttpRequest();
// configure 

xhr.open("GET",url);

// add event listeners

xhr.onreadystatechange=function (){
    // check if request is complete and successful
    if(xhr.readyState===4 && xhr.status===200){
        // parse json data into object formatt
        console.log(JSON.parse(xhr.responseText));
    }
    // error
    if(xhr.readyState===4&& xhr.status!==200){
        console.log(xhr.statusText);
    }
}
// send request
xhr.send();