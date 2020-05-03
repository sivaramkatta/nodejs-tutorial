const express = require("express");

const router = express.Router();

router.get("/aasaanjobs", (req, res) => {
  res.send("aasaanjobs company");
});

router.get("/olxpeople", (req, res) => {
  res.send("olxpeople company");
});

module.exports = router;
