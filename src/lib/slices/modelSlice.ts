import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MakeType, Model, ModelSlice } from "../../types";

const initialState: ModelSlice = {
  models: [],
  makeTypes: [],
  loading: false,
  error: null,
};

export const fetchModelsForMake = createAsyncThunk(
  "modelSlide/fetchModelsForMake",
  async (makeId?: string) => {
    try {
      const response = await axios.get<{ Results: Model[] }>(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${makeId}?format=json`,
      );
      return response.data.Results;
    } catch (error) {
      throw new Error("Failed to fetch models for make");
    }
  },
);

export const fetchTypesForMake = createAsyncThunk(
  "modelSlide/fetchTypesForMake",
  async (makeId?: string) => {
    try {
      const response = await axios.get<{ Results: MakeType[] }>(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/${makeId}?format=json`,
      );
      return response.data.Results;
    } catch (error) {
      throw new Error("Failed to fetch types for make");
    }
  },
);

export const modelSlice = createSlice({
  name: "modelSlicer",
  initialState,
  reducers: {
    resetModels(state) {
      state.models = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchModelsForMake.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.models = [];
      })
      .addCase(fetchModelsForMake.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.models = action.payload;
      })
      .addCase(fetchModelsForMake.rejected, (state, action) => {
        state.loading = false;
        state.models = [];
        state.error = action.error.message || "Failed to fetch models for make";
      })
      .addCase(fetchTypesForMake.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.makeTypes = [];
      })
      .addCase(fetchTypesForMake.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.makeTypes = action.payload;
      })
      .addCase(fetchTypesForMake.rejected, (state, action) => {
        state.loading = false;
        state.makeTypes = [];
        state.error = action.error.message || "Failed to fetch Types for make";
      });
  },
});

export const { resetModels } = modelSlice.actions;

export default modelSlice.reducer;
