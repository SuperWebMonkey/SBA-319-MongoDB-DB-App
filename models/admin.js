import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

adminSchema.methods.getAdmins = function (obj) {
  return mongoose
    .model("Admin")
    .find({ email: this.email, username: this.username }, obj);
};

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
