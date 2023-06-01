import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { loginWithMicrosoft } from "../../services/firebaseAuth.service";

export const userApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getUserDetails: build.query({
      queryFn() {
        try {
          const result = loginWithMicrosoft();
          return { data: result };
        } catch (error) {
          return { error: error };
        }
      },
    }),
  }),
});

export const { useUserApi } : any = userApi