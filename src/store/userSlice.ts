import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginWithMicrosoft,
  // updateUserProfile,
} from "../services/firebaseAuth.service";

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
    return update;
  }
);

// export const userProfile = (update: any) => {
//   return update;
// };

// export const updateUserProfileAsync: any | void = createAsyncThunk(
//   "userSlice/profileUpdate",
//   async (data) => {
//     // const res: any = await updateUserProfile();
//     return data;
//   }
// );

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
        state.error = { payload };
      })
      .addCase(userProfileAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = { ...payload };
      });
    // .addCase(updateUserProfileAsync.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(updateUserProfileAsync.fulfilled, (state, { payload }) => {
    //   state.loading = false;
    //   state.data = payload;
    // });
    // .addCase(updateUserProfileAsync.pending, (state, { payload }) => {
    //   state.loading = false;
    //   state.error = { payload };
    // });
  },
});

export default userSlice.reducer;
