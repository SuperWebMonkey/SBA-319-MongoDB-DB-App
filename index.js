import express from "express";
import "dotenv/config";
import grades from "./routes/grades.js";
import grades_agg from "./routes/grades_agg.js";
import Admins from "./models/admin.js";
import Items from "./models/item.js";
import Users from "./models/user.js";

const PORT = process.env.PORT || 3000;
const app = express();

// Body parser middleware
app.use(express.json());

// test db connection
// import db from "./db/conn.js";

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.get("/items", async (req, res) => {
  try {
    const items = await Items.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Items" });
  }
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
