import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginWithMicrosoft } from "../services/firebaseAuth.service";

const initialState = {
  data: {},
  loading: false,
  error: {},
};

export const loginWithMicrosoftAsync: any | void = createAsyncThunk(
  "UserSlice/Login",
  async () => {
    const res: any = await loginWithMicrosoft();
    return res;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   builder
   .addCase (loginWithMicrosoftAsync.pending, (state) => {
      state.loading = true;
    })
    .addCase (loginWithMicrosoftAsync.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    })
    .addCase (loginWithMicrosoftAsync.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = { payload };
    })
  },      
});


export default userSlice.reducer
