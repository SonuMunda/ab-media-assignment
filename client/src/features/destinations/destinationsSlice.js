import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state for the slice
const initialState = {
  destinations: [],
  destLoading: false,
  destError: null,
};

// Async thunk to fetch destinations
export const fetchDestinations = createAsyncThunk(
  "destinations/fetchDestinations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/destinations`
      );
      if (!response.ok) {
        return rejectWithValue("Failed to fetch destinations");
      }
      const data = await response.json();
      const destinations = data?.data;
      return destinations;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

// Slice to handle destinations state
const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.destLoading = true;
        state.destError = null;
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.destLoading = false;
        state.destinations = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.destLoading = false;
        state.destError = action.payload || action.error.message;
      });
  },
});

export default destinationsSlice.reducer;
