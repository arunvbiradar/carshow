import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Manufacturer,
  ManufacturerState,
  ManufacturerDetails,
  MakeManufacturer,
} from "../../types";

const initialState: ManufacturerState = {
  makes: [],
  manufacturers: [],
  manufacturerDetails: [],
  loading: false,
  error: null,
};

export const fetchManufacturers = createAsyncThunk(
  "manufacturers/fetchManufacturers",
  async () => {
    try {
      const response = await axios.get<{ Results: Manufacturer[] }>(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json&page=1",
      );
      return response.data.Results;
    } catch (error) {
      throw new Error("Failed to fetch manufacturers data");
    }
  },
);

export const fetchManufacturerDetails = createAsyncThunk(
  "manufacturer/fetchManufacturerDetails",
  async (id?: string) => {
    try {
      const response = await axios.get<{ Results: ManufacturerDetails[] }>(
        `https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/${id}?format=json`,
      );
      return response.data.Results;
    } catch (error) {
      throw new Error("Failed to fetch manufacturers data");
    }
  },
);

export const fetchMakesForManufacturers = createAsyncThunk(
  "manufacturers/fetchMakesForManufacturers",
  async (type: { id?: string; name?: string }) => {
    try {
      let key = type.hasOwnProperty("id") ? type.id : type.name;
      const response = await axios.get<{ Results: MakeManufacturer[] }>(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/${key}?format=json`,
      );
      return response.data.Results;
    } catch (error) {
      throw new Error("Failed to fetch manufacturers data");
    }
  },
);

export const manufacturerSlice = createSlice({
  name: "manufacturer",
  initialState,
  reducers: {
    resetManufacturers(state) {
      state.manufacturers = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchManufacturers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.manufacturers = [];
      })
      .addCase(fetchManufacturers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.manufacturers = action.payload;
      })
      .addCase(fetchManufacturers.rejected, (state, action) => {
        state.loading = false;
        state.manufacturers = [];
        state.error =
          action.error.message || "Failed to fetch manufacturers data";
      })
      .addCase(fetchManufacturerDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.manufacturerDetails = [];
      })
      .addCase(fetchManufacturerDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.manufacturerDetails = action.payload;
      })
      .addCase(fetchManufacturerDetails.rejected, (state, action) => {
        state.loading = false;
        state.manufacturerDetails = [];
        state.error =
          action.error.message || "Failed to fetch manufacturers data";
      })
      .addCase(fetchMakesForManufacturers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.makes = [];
      })
      .addCase(fetchMakesForManufacturers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.makes = action.payload;
      })
      .addCase(fetchMakesForManufacturers.rejected, (state, action) => {
        state.loading = false;
        state.makes = [];
        state.error =
          action.error.message || "Failed to fetch manufacturers data";
      });
  },
});

export const { resetManufacturers } = manufacturerSlice.actions;

export default manufacturerSlice.reducer;
