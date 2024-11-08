import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    unique: true,
    minlength: [8, "Must be at least 8 characters long"],
    maxlength: [40, "40 characters is the max"],
  },
  username: { type: String, required: true, unique: true },
  name: {
    type: String,
    required: true,
    minlength: [3, "Product name must be at least 3 characters long"],
    maxlength: [150, "Product name cannot exceed 150 characters"],
  },
});

userSchema.index({ password: 1 });
userSchema.index({ username: 1 });
userSchema.index({ name: 1 });

userSchema.methods.getUsers = function (obj) {
  return mongoose
    .model("User")
    .find({ email: this.email, username: this.username }, obj);
};

const User = mongoose.model("User", userSchema);

export default User;
