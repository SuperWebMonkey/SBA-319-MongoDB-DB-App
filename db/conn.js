// For special characters such as @ you need to encode it
// This means replacing @ with %40 or using the encoding function

// import "dotenv/config";
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";

// const connectionString = process.env.ATLAS_URI || "";
// // console.log(connectionString);

// const client = new MongoClient(connectionString);

// let conn;
// try {
//   conn = await client.connect();
//   console.log("Connected to Mongo");
// } catch (err) {
//   console.log(err);
// }

// const db = await conn.db("sample_training");

// export default db;

const db = async () => {
  try {
    const con = await mongoose.connect(process.env.ATLAS_URI);
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
  }
};

export default db;
