const mongoose = require("mongoose");
// the Mongoose library for MongoDB, which is a popular database for Node.js applications

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
// This line exports the connectDB function as a module.
//  This means that other parts of your application 
// can import and use this function to establish a connection
//  to the MongoDB database.

