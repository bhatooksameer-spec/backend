// require("dotenv").config();
// const { MongoClient } = require("mongodb");

// const dns = require("node:dns");
// dns.setServers(["1.1.1.1", "8.8.8.8"]);

// const client = new MongoClient(process.env.DB_URI
  
// );
// let db;
// async function connectDB() {
//   await client.connect();
//   db = client.db("app");
//   console.log("===Database Connected");
// }

// function getDB(){
//     return db;
// }

// module.exports = { connectDB, getDB };

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

let db;

const connectDB = async () => {
  try {
    await client.connect();

    db = client.db(process.env.DB_NAME);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error);
    process.exit(1);
  }
};

const getDB = () => {
  if (!db) {
    throw new Error("Database is not connected");
  }

  return db;
};

module.exports = {
  connectDB,
  getDB
};