const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);
let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db('studiojeise');
    console.log("✅ Conectado ao MongoDB!");
  }
  return db;
}

module.exports = connectDB;
