import { modalReducer } from "./modalReducer";
import { configureStore, createSlice } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    switchVal: modalReducer,
  },
});

const switchSlice = createSlice({
  name: "modal",
  initialState: {
    active: false,
  },
  reducers: {
    toggleSwitch: (state) => {
      state.active = !state.active;
    },
  },
});

export const toggleSwitch = switchSlice.actions.toggleSwitch;
export default switchSlice.reducer;
