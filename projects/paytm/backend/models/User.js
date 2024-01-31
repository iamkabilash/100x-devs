import mongoose from "mongoose";

const UserSchema = {
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: { type: string, required: true },
  firstName: { type: string, required: true },
  lastName: { type: string },
};

const User = new mongoose.model("User", UserSchema);
module.exports = { User };
