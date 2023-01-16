import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotel.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create Hotel
router.post("/", verifyAdmin, createHotel);

//Update hotel
router.put("/:id", verifyAdmin, updateHotel);

// Delete hotel
router.delete("/:id", verifyAdmin, deleteHotel);

// Get Hotel
router.get("/:id", getHotel);

//Get all hotels
router.get("/", getAllHotels);

export default router;
