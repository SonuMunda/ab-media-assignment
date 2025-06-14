import TourPackage from "../models/TourPackage.js";

export const getTourPackages = async (req, res) => {
  try {
    const tourPackages = await TourPackage.find();
    res.status(200).json({ data: tourPackages });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching tour packages" });
  }
};

export const getTopRatedPackages = async (req, res) => {
  try {
    const tourPackages = await TourPackage.find({ topSelling: true });
    res.status(200).json({ data: tourPackages });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching top rated tour packages" });
  }
};
