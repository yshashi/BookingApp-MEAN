import Users from "../models/Users.js";
import { createError } from "../utils/error.js";

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await Users.findOneAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("Users has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      return next(createError(404, "Users not found!!!!"));
    } else {
      return res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
