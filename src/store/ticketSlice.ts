import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateTicket } from "../services/firebase/database.service";

const initialState = {
  tickets: {},
  loading: false,
};

export const createTicketAsync: any | void = createAsyncThunk(
  "ticketSlice/ticket",
  async (ticketData) => {
    return ticketData;
  }
);

/**
 *
 * @param id Ticket ID
 * @param updateData Ticket Data
 * @returns
 */
export const updateTicketAsync: any | void = createAsyncThunk(
  "ticketSlice/update-ticket",
  async (data: any) => {
    try {
      await updateTicket(data?.id, data?.updateData);
      return;
    } catch (error) {
      console.error(error);
    }
    return;
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
