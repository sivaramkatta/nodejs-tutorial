// middleware is executed between user req and server
const express = require("express");

const app = express();

// below middleware will be executed for all routes
app.use((req, res, next) => {
  console.log("inside middleware...");
  // next is imp to tell express that we are done with modifying
  next();
});

// below middleware will be executed for specific route
app.use("/profile", (req, res, next) => {
  console.log("inside middleware...");
  // adding dummy key to req obj
  req.pageName = "profile";
  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/profile", (req, res) => {
  // accessing dummy key
  console.log(req.pageName);
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("middleware server running...");
});
