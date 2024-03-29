import zod from "zod";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
import User from "../models/User.js";
import Account from "../models/Account.js";

export const simple = async (req, res) => {
  res.json({ Hello: "Mars" });
};

export const signup = async (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
  });
  const { success } = signupSchema.safeParse({
    username,
    password,
    firstName,
    lastName,
  });
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const isExisting = await User.findOne({ username });
  if (isExisting) {
    return res
      .status(411)
      .json({ message: "Email already taken / Incorrect inputs" });
  }

  const user = await User.create({ username, password, firstName, lastName });
  const token = jwt.sign({ userId: user._id }, JWT_SECRET);

  // assign wallet balance on signup
  const randomAmount = Math.floor(Math.random() * 10000);
  await Account.create({ userId: user._id, balance: randomAmount });

  res.status(200).json({ message: "User created successfully", token: token });
};

export const signin = async (req, res) => {
  const { username, password } = req.body;

  const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
  });

  const { success } = signinSchema.safeParse({
    username,
    password,
  });

  if (!success) {
    return res.status(411).json({ message: "Error while logging in" });
  }

  const user = await User.findOne({ username });
  if (user.password !== password) {
    return res.status(411).json({ message: "Error while logging in" });
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET);

  res.status(200).json({
    token: token,
  });
};

export const updateUser = async (req, res) => {
  const { password, firstName, lastName } = req.body;

  const updateUserSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
  });
  const { success } = updateUserSchema.safeParse({
    password,
    firstName,
    lastName,
  });
  if (!success) {
    return res
      .status(411)
      .json({ message: "Error while updating information" });
  }

  const user = await User.findById(req.userId);

  if (!user) {
    return res
      .status(411)
      .json({ message: "Error while updating information" });
  }

  try {
    if (password) {
      user.password = password;
    }
    if (firstName) {
      user.firstName = firstName;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    await user.save();
    res.json({
      message: "Updated successfully",
    });
  } catch (error) {
    return res
      .status(411)
      .json({ message: "Error while updating information" });
  }
};

export const searchUser = async (req, res) => {
  const { filter } = req.query;

  if (!filter) {
    return res.status(411).json({ message: "Error fetching information" });
  }

  const users = await User.find(
    {
      $or: [
        { firstName: { $regex: filter, $options: "i" } },
        { lastName: { $regex: filter, $options: "i" } },
      ],
    },
    "_id firstName lastName"
  );

  const exceptSelf = users.filter((user) => user._id !== req.userId);

  if (!exceptSelf) {
    return res.status(411).json({ message: "No users found" });
  }

  res.status(200).json({ exceptSelf });
};

export const getOtherUsers = async (req, res) => {
  const users = await User.find(
    { _id: { $ne: req.userId } },
    "_id firstName lastName"
  );

  if (!users) {
    return res.status(411).json({ message: "No users found" });
  }

  res.status(200).json({ users });
};
