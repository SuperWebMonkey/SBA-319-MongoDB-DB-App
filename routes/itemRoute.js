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
      return res.status(404).json({ message: "item not found" });
    }
    res.status(200).json(item);
  } catch (e) {
    res.status(500).json({ message: "Error fetching item", error: e });
  }
});

// Post request to items
router.post("/", async (req, res) => {
  try {
    const { title, price, description } = req.body;
    console.log("body", req.body);

    if (!title || !price || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newItem = new items({
      title,
      price,
      description,
    });

    console.log("new item", newItem);

    await newItem.save();
    res.status(201).json({ message: "item created", item: newItem });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const newUpdate = req.body;
    console.log(newUpdate);

    const updatedItem = await items.findByIdAndUpdate(id, newUpdate, {
      new: true,
      runValidators: true,
    });

    console.log(updatedItem);

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({
      message: "Item updated successfully",
      product: updatedItem,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const removedItem = await items.findByIdAndDelete(id);
    console.log("removed item", removedItem);

    if (!removedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({
      message: "Item deleted successfully",
      removedItem,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
