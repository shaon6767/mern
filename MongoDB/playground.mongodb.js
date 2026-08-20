show("dbs");
show("collections");
use("practiceDB");
db.products.insertOne({
  name: "Malai Cha",
  price: "20tk",
});
