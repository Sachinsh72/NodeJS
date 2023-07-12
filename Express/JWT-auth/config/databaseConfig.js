//mongo instance
const mongoose = require('mongoose');

//path
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/my_database";

//method to database setup
 const databaseconnect = () => {
    mongoose
    .connect(MONGODB_URL)
    .then((conn) => console.log(`Connect to DB : ${conn.connection.host}`))
    .catch((err) => console.log(err.message));
}

//export
module.exports = databaseconnect;