import Admins from "../models/admin.js";
import express from "express";

const router = express.Router();

app.get("/", async (req, res) => {
  try {
    const admins = await Admins.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Admins" });
  }
});
