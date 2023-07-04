import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSideBar } = toggleSlice.actions;
export default toggleSlice.reducer;
