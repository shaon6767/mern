const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});
app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

// app.use((req, res, next) => {
//   res.send(`<h1>Hellow World</h1>`);
//   next();
// });

app.get("/", (req, res, next) => {
  res.send(`<h1>Home</h1>`);
});
app.get("/contact-us", (req, res, next) => {
  res.send(`
    <h1>Contact</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="submit" value="Submit" />
      </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.send(`<h1>Thank you for contacting us!</h1>
    <p>We will contact with you shortly</p>`);
});
