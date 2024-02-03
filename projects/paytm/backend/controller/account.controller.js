import mongoose from "mongoose";
import Account from "../models/Account.js";

export const getBalance = async (req, res) => {
  const userId = req.userId;
  if (!userId) {
    return res.status(411).json({ message: "Invalid request" });
  }

  const account = await Account.findOne({ userId });
  if (!account) {
    return res.status(411).json({ message: "Invalid request" });
  }

  res.status(200).json({ balance: account.balance });
};

export const transferMoney = async (req, res) => {
  const userId = req.userId;
  if (!userId) {
    return res.status(411).json({ message: "Invalid request" });
  }

  const session = await mongoose.startSession();
  session.startTransaction();
  const { amount, to } = req.body;

  const fromAccount = await Account.findOne({ userId: req.userId }).session(
    session
  );
  if (!fromAccount) {
    await session.abortTransaction();
    return res.status(411).json({ message: "Invalid request" });
  }
  if (fromAccount.balance < amount) {
    await session.abortTransaction();
    return res.status(411).json({ message: "Insufficient balance" });
  }

  const toAccount = await Account.findOne({ userId: to }).session(session);
  if (!toAccount) {
    await session.abortTransaction();
    return res.status(411).json({ message: "Invalid account" });
  }

  try {
    await Account.updateOne(
      { userId: userId },
      { $inc: { balance: -amount } }
    ).session(session);
    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    await session.commitTransaction();
    res.status(200).json({ message: "Transfer successful" });
  } catch (error) {
    res.status(411).json({ message: "Transfer failed" });
  }
};
