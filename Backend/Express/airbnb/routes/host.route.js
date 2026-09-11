const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/add-home", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "register.html"));
});

router.post("/add-home", (req, res) => {
  const { name } = req.body;
  console.log("Received data:", name);
  res.sendFile(path.join(__dirname, "../", "views", "addedHome.html"));
});

module.exports = router;
