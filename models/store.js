import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
  location: { type: String, required: true },
  owner: { type: String, required: true },
});

// storeSchema.index({ location: 1 });
// storeSchema.index({ owner: 1 });

storeSchema.methods.getStores = function (obj) {
  return mongoose
    .model("Store")
    .find({ location: this.location, owner: this.owner }, obj);
};

const Store = mongoose.model("Store", storeSchema);

export default Store;
