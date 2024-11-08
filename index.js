import express from "express";
import "dotenv/config";
import Seeds from "./db/seed.js";
import con from "./db/conn.js";
import userRoute from "./routes/userRoute.js";
import itemRoute from "./routes/itemRoute.js";

const PORT = process.env.PORT || 3000;
const app = express();

// Body parser middleware
app.use(express.json());

// test db connection
// import db from "./db/conn.js";
// import connDB from "./db/conn.js";
// connDB();

// Routes
app.use("/users", userRoute);
app.use("/items", itemRoute);
//app.use("orders", orderRoute);

await Seeds();
await con();

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

//Global Error handling middlware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
