import mongoose, { Schema } from "mongoose";

const AccountSchema = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: { type: Number, required: true, default: 0 },
};

const Account = new mongoose.model("Account", AccountSchema);
export default Account;
