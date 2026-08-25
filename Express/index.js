import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.get("/", (req, res) => {
  res.render("page", { title: "Express App" });
});

app.get("/api/status", (req, res) => {
  res.json({ status: "ok" });
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
