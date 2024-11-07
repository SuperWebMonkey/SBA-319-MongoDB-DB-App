import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
