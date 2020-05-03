const express = require("express");

const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");
// if you dont have views folder in root we have to add custom path like below
app.set("views", __dirname);

app.get("/", (req, res) => {
  res.render("views/index", { pageName: "dashboard" });
});

app.listen(3000);
