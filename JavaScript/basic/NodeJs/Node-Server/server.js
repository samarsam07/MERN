// 1. import require modules
const http = require("http");
console.log(http);

// 2. define the handler
const requestHandler = (req, res) => {
    console.log(req);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World,this is my first node.js server.\n");
};
// 3. create server
const server = http.createServer(requestHandler);
// 4. start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on port  http://localhost:${PORT}`);
});
