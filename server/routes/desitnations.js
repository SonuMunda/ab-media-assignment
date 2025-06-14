import express from "express";
import { getDestinations } from "../controllers/destinations.js";

const router = express.Router();

// router to get all destinations
router.get("/", getDestinations);

export default router;

