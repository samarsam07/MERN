// 1. import require modules
const http = require("http");
// const url = require("url");
const employees = [
  {
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id: 2,
    name: "Alice",
    age: 25,
  },
];

// 2. define the handler
const requestHandler = (req, res) => {
    const {method,url}=req;
    const parts=url.split("/");
    const id=parts[2];
    if(method==="GET" &&url==="/employees"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(employees));
    }else if(method==="GET" && parts[1]==="employees" && id){
        const employee=employees.find((emp)=>emp.id===parseInt(id));
        if(employee){
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(employee));
        }else{
            res.writeHead(404, {"Content-Type": "application/json"});
            res.end(JSON.stringify({error:"Employee not found"}));
        }
    }
    else if(method==="POST" && url==="/employees"){
        let body = "";
        req.on("data",(chunks)=>{
            body+=chunks;
        });
        req.on("end",()=>{
            const newEmpolyee=JSON.parse(body);
            employees.push(newEmpolyee);
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(newEmpolyee));
        })
    }
};
// 3. create server
const server = http.createServer(requestHandler);
// 4. start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on port  http://localhost:${PORT}`);
});
