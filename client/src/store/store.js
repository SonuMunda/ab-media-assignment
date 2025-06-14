import { configureStore } from "@reduxjs/toolkit";
import destinationsReducer from "../features/destinations/destinationsSlice";
import topSellerPackagesReducer from "../features/packages/topSellingsSlice";

const store = configureStore({
  reducer: {
    destinations: destinationsReducer,
    topSellerPackages: topSellerPackagesReducer,
  },
});

export default store;
