import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create Room
router.post("/:hotelId", verifyAdmin, createRoom);

//Update Room
router.put("/:id", verifyAdmin, updateRoom);

// Delete Room
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

// Get Room
router.get("/:id", getRoom);

//Get all Rooms
router.get("/", getAllRooms);

export default router;
