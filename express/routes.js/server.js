const express = require("express");
const job_router = require("./job_routes");

const app = express();
const router = express.Router();

app.use("/company", job_router);
app.use("/employee", router);

router.get("/aasaanjobs", (req, res) => {
  res.send("aasaanjobs employee");
});

router.get("/olxpeople", (req, res) => {
  res.send("olxpeople employee");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("router server listening...");
});
