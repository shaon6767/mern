const express = require("express");
const router = express.Router();

router.get("/host/add-home", (req, res) => {
  res.send(`
    <h1>Register here</h1>
    <form action="/host/add-home" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br><br>
      <input type="submit" value="Submit">
      </form>
    `);
});

router.post("/host/add-home", (req, res) => {
  const { name } = req.body;
  console.log("Received data:", name);
  res.send(`
    <h1>Thank you for registering, ${name}!</h1>
    <a href ="/">Goto Home </a>
    `);
});

module.exports = router;
