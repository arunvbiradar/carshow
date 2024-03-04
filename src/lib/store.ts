import { combineReducers, configureStore } from "@reduxjs/toolkit";
import makesReducer from "./slices/makeSlice";
import modelsReducer from "./slices/modelSlice";
import manufacturerReducer from "./slices/manufacturerSlice";
import specificationReducer from "./slices/specificationSlice";

const rootReducer = combineReducers({
  makes: makesReducer,
  models: modelsReducer,
  manufacturers: manufacturerReducer,
  specifications: specificationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
