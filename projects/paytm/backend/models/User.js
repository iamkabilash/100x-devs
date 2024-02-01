import mongoose from "mongoose";

const UserSchema = {
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
};

const User = new mongoose.model("User", UserSchema);
export default User;
