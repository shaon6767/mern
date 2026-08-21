use("test");

// db.products.insertMany([{
//     "name": "Gaming Laptop",
//     "price": 75000,
//     "category": "electronics",
//     "stock": 15,
//     "discount": 10,
//     "tags": ["gaming", "laptop", "electronics"]
// },
// {
//     "name": "Smartphone",
//     "price": 25000,
//     "category": "electronics",
//     "stock": 8,
//     "discount": 15,
//     "tags": ["phone", "android", "electronics"]
// },
// {
//     "name": "Wireless Mouse",
//     "price": 800,
//     "category": "accessories",
//     "stock": 50,
//     "discount": 5,
//     "tags": ["mouse", "computer", "electronics"]
// },
// {
//     "name": "Mechanical Keyboard",
//     "price": 3500,
//     "category": "accessories",
//     "stock": 20,
//     "discount": 12,
//     "tags": ["keyboard", "gaming", "computer"]
// },
// {
//     "name": "LED Monitor",
//     "price": 12000,
//     "category": "electronics",
//     "stock": 5,
//     "discount": 18,
//     "tags": ["monitor", "display", "electronics"]
// },
// {
//     "name": "Office Chair",
//     "price": 6000,
//     "category": "furniture",
//     "stock": 0,
//     "discount": 20,
//     "tags": ["chair", "office", "furniture"]
// },
// {
//     "name": "Gaming Headset",
//     "price": 4500,
//     "category": "electronics",
//     "stock": 12,
//     "discount": 25,
//     "tags": ["gaming", "audio", "electronics"]
// }])

//find products that out of stock

// db.products.find({
//   stock: 0,
// });

//find products sorted to price (low to high)

//db.products.find().sort({ price: 1 });

//find 5 most expensive products

//db.products.find().sort({ price: -1 }).limit(5);

//add a new tag "new" to a product

// db.products.updateOne(
//   {
//     name: "Gaming Laptop",
//   },
//   { $push: { tag: "new" } },
// );

//now remove that tag

//db.products.updateOne({ name: "Gaming Laptop" }, { $pull: { tag: "new" } });

//now delete

//db.products.deleteOne({ name: "Gaming Laptop" }, { $unset: { tag: "" } });

// db.orders.insertMany([
//   {
//     user: "Rahul Sharma",
//     totalAmount: 80000,
//     status: "delivered",
//     orderDate: "2025-02-10",
//   },
//   {
//     user: "Priya Singh",
//     totalAmount: 3000,
//     status: "pending",
//     orderDate: "2025-03-01",
//   },
//   {
//     user: "Amit Verma",
//     totalAmount: 15000,
//     status: "cancelled",
//     orderDate: "2024-12-15",
//   },
//   {
//     user: "Rahul Sharma",
//     totalAmount: 4500,
//     status: "delivered",
//     orderDate: "2025-01-20",
//   },
//   {
//     user: "Sneha Gupta",
//     totalAmount: 1200,
//     status: "pending",
//     orderDate: "2025-03-05",
//   },
// ]);

//find orders after jan 1,2025

// orderDate is stored as YYYY-MM-DD strings, so lexical comparison works
// or use ISODate if stored as Date objects

// db.orders.find({
//   orderDate: { $gt: "2025-01-01" }
// });


