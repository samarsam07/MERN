// 1. import require modules
const http = require("http");
const url = require("url");
// ! routing
// ? home /

// ? about /

// 2. define the handler
const requestHandler = (req, res) => {
  //    pass the url
  const passedURL = url.parse(req.url);
  console.log(passedURL);
  //   home route
  if (passedURL.pathname === "/" && req.method === "GET") {
    // send response
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to home page");
  }
  // about route
  else if (passedURL.pathname === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("this is About page");
  }else{
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
};
// 3. create server
const server = http.createServer(requestHandler);
// 4. start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on port  http://localhost:${PORT}`);
});
