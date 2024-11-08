import users from "../models/user.js";
import express from "express";

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const allUsers = await users.find();
    console.log("Fetched users:", allUsers);
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// GET a single order by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await users.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err });
  }
});

// Post request to items
router.post("/", async (req, res) => {
  try {
    console.log("body", req.body);
    const { email, password, username, name } = req.body;

    if (!email || !password || !username || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new users({
      email,
      password,
      username,
      name,
    });

    await newUser.save();
    res.status(201).json({ message: "new user joined", user: newUser });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const newUpdate = req.body;
    console.log("body", newUpdate);

    const updatedUser = await users.findByIdAndUpdate(id, newUpdate, {
      new: true,
      runValidators: true,
    });

    console.log("updated user", updatedUser);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User updated successfully",
      product: updatedUser,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error. Update Failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removedUser = await users.findByIdAndDelete(id);

    if (!removedUser) {
      return res
        .status(404)
        .json({ message: "User not found. Cannot delete." });
    }

    res.json({
      message: "User deleted successfully",
      removedUser,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
