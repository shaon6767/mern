const express = require("express");
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Smith", age: 25 },
  { id: 3, name: "Shawn", age: 25 },
  { id: 4, name: "Michael", age: 28 },
];

app.get("/users", (req, res) => {
  res.json(users);
});
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.json(user);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//the heart of express
//app.METHOD(PATH, HANDLER)
// this controls everything
//Methods: GET, POST, PUT, DELETE
//path: /, /about, /contact (the routes of the app)
//handler: the function that is executed when the route is matched
