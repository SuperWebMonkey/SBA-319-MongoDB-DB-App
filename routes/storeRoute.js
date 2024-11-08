import Stores from "../models/store.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allStores = await Stores.find();
    res.json(allStores);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stores" });
  }
});

// GET a single order by ID
router.get("/:id", async (req, res) => {
  try {
    const store = await Stores.findById(req.params.id);

    if (!store) {
      return res.status(404).json({ message: "store not found" });
    }
    res.status(200).json(store);
  } catch (e) {
    res.status(500).json({ message: "Error fetching store", error: e });
  }
});

export default router;
