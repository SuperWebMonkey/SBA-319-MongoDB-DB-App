// For special characters such as @ you need to encode it
// This means replacing @ with %40 or using the encoding function

import "dotenv/config";
import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
// console.log(connectionString);

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Connected to Mongo");
} catch (err) {
  console.log(err);
}

const db = await conn.db("sample_training");

export default db;