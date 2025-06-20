import mongoose from "mongoose";

const Destination = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  startingPrice: { type: Number, required: true },
  rating: { type: Number, required: true },
  location: { type: String, required: true },
});

export default mongoose.model("Destination", Destination);
