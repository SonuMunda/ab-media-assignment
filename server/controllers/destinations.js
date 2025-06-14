import Destination from "../models/Desination.js";

export const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json({ data: destinations });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching destinations" });
  }
};
