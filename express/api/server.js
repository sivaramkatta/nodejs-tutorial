const express = require("express");
const fs = require("fs");
const path = require("path");
const body_parser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const users = require("./db/users.json");
const app = express();

app.use(body_parser.json());

//get list of users
app.get("/api/users", (req, res) => {
  res.send(users);
});

//get specific user based on id
app.get("/api/user/:id", (req, res) => {
  const user = users.find(user => user.id == req.params.id);
  if (user) {
    res.send(user);
  } else {
    throw new Error("No user with id");
  }
});

//add user
app.post("/api/users", (req, res) => {
  req.body.id = uuidv4();
  users.push(req.body);
  fs.writeFile(
    path.join(__dirname, "/db/users.json"),
    JSON.stringify(users),
    err => {
      if (err) throw err;
      else res.send("success");
    }
  );
});

//delete user based on id
app.delete("/api/user/:id", (req, res) => {
  const index = users.findIndex(user => user.id == req.params.id);
  if (index >= 0) {
    users.splice(index, 1);
    fs.writeFile(
      path.join(__dirname, "/db/users.json"),
      JSON.stringify(users),
      err => {
        if (err) throw err;
        else res.send("success");
      }
    );
  } else {
    throw new Error("No user with id");
  }
});

app.listen(3000, () => {
  console.log("api server is running...");
});
