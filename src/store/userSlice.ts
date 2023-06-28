import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginWithMicrosoft,
  logoutProfile,
} from "../services/firebase/auth.service";

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
export const userProfileAsync: any | void = createAsyncThunk(
  "UserSlice/Fetch",
  async (update: any) => {
    console.log("eeeeeeee", update);
    return update;
  }
);

export const logoutAsync: any | void = createAsyncThunk(
  "userSlice/Logout",
  async () => {
    logoutProfile();
  }
);

export const addUserData: any | void = createAsyncThunk(
  "UserSlice/addUserData",
  async (data) => {
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWithMicrosoftAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginWithMicrosoftAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(loginWithMicrosoftAsync.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(userProfileAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(userProfileAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.data = {};
      });
  },
});

export default userSlice.reducer;
