import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import cors from "cors";
import connectDatabase from "./config/db.js";
import desinationRoute from "./routes/desitnations.js";
import packagesRoute from "./routes/packages.js";

app.use(express.json());
app.use(cors());
app.use("/api/destinations", desinationRoute);
app.use("/api/packages", packagesRoute);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();
