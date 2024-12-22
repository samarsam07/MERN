// 1. import require modules
const http = require("http");
const url = require("url");

// 2. define the handler
const requestHandler = (req, res) => {
    const data={
        id:123,
        name:"Zangetsu",
        email:"tensaZangetsu@gmail.com"
    }
    res.setHeader("Content-type","application/json")
    res.end(JSON.stringify(data));
};
// 3. create server
const server = http.createServer(requestHandler);
// 4. start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on port  http://localhost:${PORT}`);
});
