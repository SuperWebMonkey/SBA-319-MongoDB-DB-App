import items from "../models/item.js";

const express = require("express");
const router = express.Router();

// Post request to items
router.post("/items", async (req, res) => {
  try {
    const { title, price, description } = req.body;

    if (!title || !price || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newItem = new items({
      title,
      price,
      description,
    });

    await newItem.save();
    res.status(201).json({ message: "item created", item: newItem });
  } catch (e) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newUpdate = req.body;

    const updatedItem = await items.findByIdAndUpdate(id, newUpdate, {
      new: true,
      runValidators: true,
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({
      message: "Item updated successfully",
      product: updatedItem,
    });
  } catch (e) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/items:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removedItem = await items.findByIdAndDelete(id);

    if (!removedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({
      message: "Item deleted successfully",
      removedItem,
    });
  } catch (e) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
