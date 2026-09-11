const express = require("express");
const userRouter = require("./routes/user.route");
const hostRouter = require("./routes/host.route");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(userRouter);
app.use(hostRouter);

const port = 3003;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
