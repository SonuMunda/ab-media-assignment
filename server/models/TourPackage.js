import mongoose from "mongoose";

const TourPackage = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  topSelling: { type: Boolean, default: false },
  image: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
});

export default mongoose.model("TourPackage", TourPackage);
