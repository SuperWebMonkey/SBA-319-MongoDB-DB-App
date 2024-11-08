import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

itemSchema.index({ title: 1 });
itemSchema.index({ price: 1 });
itemSchema.index({ description: 1 });

itemSchema.methods.getItems = function (obj) {
  return mongoose.model("Item").find({ title: this.title }, obj);
};

const Item = mongoose.model("Item", itemSchema);

export default Item;
