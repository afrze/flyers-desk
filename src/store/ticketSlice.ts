import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: {},
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
});

export default ticketSlice.reducer;
