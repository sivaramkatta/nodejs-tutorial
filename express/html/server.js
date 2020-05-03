const express = require("express");
const path = require("path");

const app = express();

// add middlewares as app.use is executed before
app.use("/public", express.static("./assets"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/html_pages/index.html"));
});

// example to get  param and querystring
app.get("/profile/:id", (req, res) => {
  console.log(req.params, req.query);
  res.sendfile(path.join(__dirname, "/html_pages/profile.html"));
});

app.listen(3000, () => {
  console.log("html server is running on 3000");
});
