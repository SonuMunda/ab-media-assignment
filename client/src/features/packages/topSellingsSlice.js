import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  topPackages: [],
  topPackloading: false,
  topPackError: null,
};

// Async thunk to fetch top seller packages
export const fetchTopSellerPackages = createAsyncThunk(
  "topSellerPackages/fetchTopSellerPackages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/packages/top-selling`
      );
      if (!response.ok) {
        return rejectWithValue("Failed to fetch destinations");
      }
      const data = await response.json();
      const topPackagesData = data.data;
      return topPackagesData;
    } catch (error) {
      return rejectWithValue(error.message || "Network error occurred");
    }
  }
);

// Slice for managing the state
const topSellerPackagesSlice = createSlice({
  name: "topSellerPackages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopSellerPackages.pending, (state) => {
        state.topPackloading = true;
        state.topPackError = null;
      })
      .addCase(fetchTopSellerPackages.fulfilled, (state, action) => {
        state.topPackloading = false;
        state.topPackages = action.payload;
      })
      .addCase(fetchTopSellerPackages.rejected, (state, action) => {
        state.topPackloading = false;
        state.topPackError = action.payload || action.error.message;
      });
  },
});

export default topSellerPackagesSlice.reducer;
