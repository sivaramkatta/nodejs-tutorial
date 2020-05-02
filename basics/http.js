// module used to create server
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>hello world</h1>");
});

server.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
