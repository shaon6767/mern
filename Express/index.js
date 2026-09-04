const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//the heart of express
//app.METHOD(PATH, HANDLER)
// this controls everything
//Methods: GET, POST, PUT, DELETE
//path: /, /about, /contact (the routes of the app)
//handler: the function that is executed when the route is matched
