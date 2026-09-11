const express = require("express");
const userRouter = require("./routes/user.route");
const hostRouter = require("./routes/host.route");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).send(`Error 404: Page not found <br/>
    <a href="/">Home</a>`);
});
const port = 3003;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
