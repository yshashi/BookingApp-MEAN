import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello you are authenticated!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello you are authenticated user and can delete your account!");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send(
//     "Hello you are authenticated Admin and can delete everyone's account!"
//   );
// });

//Update User
router.put("/:id", verifyUser, updateUser);

// Delete hotel
router.delete("/:id", verifyUser, deleteUser);

// Get User
router.get("/:id", verifyUser, getUser);

//Get all Users
router.get("/", verifyAdmin, getAllUsers);
export default router;
