// routes/tourPackages.js
import express from "express";
import { getTopRatedPackages, getTourPackages } from "../controllers/tourPackages.js";

const router = express.Router();

// route to get all tour packages
router.get("/", getTourPackages);
// route to get top rated tour packages
router.get("/top-selling", getTopRatedPackages);

export default router;
