import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: {},
  loading: false,
};

export const createTicketAsync: any | void = createAsyncThunk(
  "ticketSlice/ticket",
  async (ticketData) => {
    console.log("ticket", ticketData);
    return ticketData;
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTicketAsync.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.tickets = payload;
    });
  },
});

export default ticketSlice.reducer;
