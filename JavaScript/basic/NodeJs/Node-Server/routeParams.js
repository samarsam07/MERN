// 1. import require modules
const http = require("http");
const url = require("url");

// 2. define the handler
const requestHandler = (req, res) => {
  //    pass the url
  const passedURL = url.parse(req.url);
  //   console.log(passedURL);
  const pathname = passedURL.pathname;
  // split the path name
  const pathParts = pathname.split("/").filter(Boolean);
  if (pathParts[0] === "products" && pathParts[1] === "2") {
    const productId = pathParts[1];
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end(`productID : ${productId}`);
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
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
