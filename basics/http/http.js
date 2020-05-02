// module used to create server
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (
    ["/example.html", "/example.css", "/example.png", "/example.json"].includes(
      req.url
    )
  ) {
    const filePath = path.join(__dirname, "/public", req.url);
    const ext = path.extname(filePath);
    let contentType = null;
    switch (ext) {
      case "html":
        contentType = "text/html";
        break;
      case "css":
        contentType = "text/css";
      case "json":
        contentType = "application/json";
      case "png":
        contentType = "image/png";
      default:
        contentType = "text/plain";
        break;
    }
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("some error occured");
  }
});

server.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
