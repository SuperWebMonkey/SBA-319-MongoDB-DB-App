import items from "../models/item.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allItems = await items.find();
    res.json(allItems);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Items" });
  }
});

// GET a single order by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await items.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: "Error fetching item", error: err });
  }
});

// Post request to items
router.post("/", async (req, res) => {
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

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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

export default router;
