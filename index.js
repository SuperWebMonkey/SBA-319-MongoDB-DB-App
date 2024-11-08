import express from "express";
import "dotenv/config";
import grades from "./routes/grades.js";
import grades_agg from "./routes/grades_agg.js";
import Admins from "./models/admin.js";
import Items from "./models/item.js";
import Users from "./models/user.js";
import Seeds from "./db/seed.js";
import userRoute from "./routes/userRoute.js";
import itemRoute from "./routes/itemRoute.js";

const PORT = process.env.PORT || 3000;
const app = express();

// Body parser middleware
app.use(express.json());

// test db connection
// import db from "./db/conn.js";
import connDB from "./db/conn.js";
connDB();

// Routes
app.use("/users", userRoute);
app.use("/items", itemRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.get("/admin", async (req, res) => {
  try {
    const admins = await Admins.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Admins" });
  }
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
