import express from "express";
import { login, register } from "../controllers/auth.controller.js";

const router = express.Router();

// login
router.post("/login", login);

// register
router.post("/register", register);

export default router;
