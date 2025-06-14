import destinations from "./data/destinations.js";
import tourPackages from "./data/tourPackages.js";
import Desination from "./models/Desination.js";
import TourPackage from "./models/TourPackage.js";

const feedData = async () => {
  try {
    await Desination.deleteMany();
    await Desination.insertMany(destinations);
    console.log("Destinations data added successfully!");

    await TourPackage.deleteMany();
    await TourPackage.insertMany(tourPackages);
    console.log("Tour packages data added successfully!");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

export default feedData;
