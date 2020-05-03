const express = require("express");
const body_parser = require("body-parser");
const users = require("./db/users.json");

const app = express();

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/user/:id", (req, res) => {
  const user = users.filter(user => user.id == req.params.id);
  if (user.length > 0) {
    res.send(user);
  } else {
    throw new Error("No user with id");
  }
});

app.listen(3000, () => {
  console.log("server is running...");
});
