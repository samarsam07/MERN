// using promise based
const url="https://jsonplaceholder.typicode.com/posts"
const fetchData=()=>{
    fetch(url).then((response)=>{
        console.log(response);
        return response.json()
    }).then((data)=>{
        console.log(data);
        
    })
}
// fetchData();


// using async await

const fetchData2=async () => {
    try {
        const result= await fetch(url)
            return result.json();
    } catch (error) {
        console.log(error);
    }
}
fetchData2().then((res)=>{
    console.log(res);
})