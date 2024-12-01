const fetchData=()=>{
    axios.get(url).then((response)=>{
        console.log(response);
    console.log(response);
    }).catch((error)=>console.log(error)
    )
}