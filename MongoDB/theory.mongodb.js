//Mongodb is No-SQL. No-SQL means Not Only SQL
// In Mongodb, We create collections instead of Tables.
// MongoDB stores data in BSON format behind the scene.

/*
Mongosh (MongoDB Shell Commands)---->

//--DATABASE COMMANDS-- //
//show dbs/databases --> Show the list of databases
//use db_name --> Create a database or switch to a database
//db --> showing current database
//db.dropDatabase() --> delete current databse

//--COLLECTION COMMANDS--//
//show collections --> Show list of all the collections
// db.createCollection("nameofCollection") --> creates a collection
// db.oldCollectionname.rename("newCollectionName") --> rename collection
//db.collectionName.drop() --> delete a collection
*/

/*
--OPERATORS IN MONGODB--

//Comparison operators
-- $gt(greater than)| $lt(less than)| $gte(greater than or equal)| $lte(less than or equal)| $eq(equal to)| 
$neq (not equal)

//Logical operators
--$and(&&--all condition true)| $or(||-- one condition true)| $nor(all condition false)| 
$not(!--reverse a condition)

//Element operators
--$exists(check true/false)| $type(check data type, basically checks BSON)

//Evaluation operators
--$expr(aggregation expression: operation between field to field, search data and compares them within same field)| $regex(pettern matching)| $mod(does modulo operation like: gives items that devide by 2)

//Array operators
-- $all(matches all elements)| $size(matches arrays of a specific length)| $in(checks if has any value)|
$nin(checks if arr has no value)| $elemMtach(matches the specific elements inside arr)|
$push(adds element: same as js array)| $pull(remove arr)| $addToSet(adds but dont allow duplicate elem)

//Update operators
--$set(update field)| $unset(remove field)| $inc(increment/decrement)| $mul(multiply)| $rename(rename field)
| $min(update field with a minimum number: like add 10, level all the elem who has more than 10)
| $max(update field with a maximum number: like add 10, level all the elem who has less than 10)
*/