const express = require("express");
const path = require("path");
const userRouter = require("./routes/user.route");
const hostRouter = require("./routes/host.route");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "./", "views", "err404.html"));
});

const port = 3003;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
