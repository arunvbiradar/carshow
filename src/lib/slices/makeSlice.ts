import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MakeCar, MakeDetail, MakeState } from "../../types";

const initialState: MakeState = {
  makes: [],
  makeDetails: [],
  loading: false,
  error: null,
};

export const fetchMakes = createAsyncThunk(
  "makes/fetchMakes",
  async (type: string) => {
    try {
      const response = await axios.get<{ Results: MakeCar[] }>(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${type}?format=json`,
      );
      return response.data.Results;
    } catch (error) {
      throw new Error("Failed to fetch makes data");
    }
  },
);

export const fetchMakeDetails = createAsyncThunk(
  "makes/fetchMakeDetails",
  async (makeId?: string) => {
    try {
      const response = await axios.get<{ Results: MakeDetail[] }>(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/${makeId}?format=json`,
      );
      return response.data.Results;
    } catch (error) {
      throw new Error("Failed to fetch makes data");
    }
  },
);

export const makeSlice = createSlice({
  name: "makes",
  initialState,
  reducers: {
    resetBodyType(state) {
      state.makes = [];
    },
  },
  extraReducers: (builder) => {
    // pending
    builder
      .addCase(fetchMakes.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.makes = [];
      })
      // fulfilled
      .addCase(fetchMakes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.makes = action.payload;
      })
      // rejected
      .addCase(fetchMakes.rejected, (state, action) => {
        state.loading = false;
        state.makes = [];
        state.error = action.error.message || "Failed to fetch makes data";
      })
      .addCase(fetchMakeDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.makeDetails = [];
      })
      .addCase(fetchMakeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.makeDetails = action.payload;
      })
      .addCase(fetchMakeDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch makes data";
        state.makeDetails = [];
      });
  },
});

export const { resetBodyType } = makeSlice.actions;

export default makeSlice.reducer;
