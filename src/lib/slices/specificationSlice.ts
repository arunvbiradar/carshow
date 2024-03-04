import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SingleSpec, Specification, SpecificationState } from "../../types";
import axios from "axios";

const initialState: SpecificationState = {
  error: null,
  loading: false,
  singleSpec: [],
  specifications: [],
};

export const fetchSpecifications = createAsyncThunk(
  "specifications/fetchSpecifications",
  async () => {
    try {
      const response = await axios.get<{ Results: Specification[] }>(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json",
      );
      return response.data.Results;
    } catch (error) {
      throw new Error("Failed to fetch specifications data");
    }
  },
);

export const fetchSingleSpec = createAsyncThunk(
  "specifications/fetchSingleSpec",
  async (id?: string) => {
    try {
      console.log(id);
      const response = await axios.get<{ Results: SingleSpec[] }>(
        `https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablevalueslist/${id}?format=json`,
      );
      return response.data.Results;
    } catch (error) {
      throw new Error("Failed to fetch specifications data");
    }
  },
);

export const specificationSlice = createSlice({
  name: "specifications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpecifications.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.specifications = [];
      })
      .addCase(fetchSpecifications.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.specifications = action.payload;
      })
      .addCase(fetchSpecifications.rejected, (state, action) => {
        state.loading = false;
        state.specifications = [];
        state.error =
          action.error.message || "Failed to fetch specifications data";
      })
      .addCase(fetchSingleSpec.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.singleSpec = [];
      })
      .addCase(fetchSingleSpec.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.singleSpec = action.payload;
      })
      .addCase(fetchSingleSpec.rejected, (state, action) => {
        state.loading = false;
        state.singleSpec = [];
        state.error =
          action.error.message || "Failed to fetch specifications data";
      });
  },
});

export default specificationSlice.reducer;
