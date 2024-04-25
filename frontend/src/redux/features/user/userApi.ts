import { baseApi } from "../baseApi";
import type { signUpDetails } from "@/types";

const headers = {
  Authorization: "Bearer your_access_token_here",
};


const usersApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    users: builder.mutation<any,signUpDetails>({
      query: (signUpDetails) => ({
        url: "users/",
        method: "POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(signUpDetails),
      }),
    }),
    usersActivation: builder.mutation({
      query: (uidToken) => ({
        url: "users/activation/",
        method: "POST",
        body: JSON.stringify(uidToken),
      }),
    }),
    usersResendActivation: builder.mutation({
      query: (email) => ({
        url: "users/resend_activation/",
        method: "POST",
        body: JSON.stringify(email),
      }),
    }),
    usersResetPassword: builder.mutation({
      query: (email) => ({
        url: "users/reset_password/",
        method: "POST",
        body: JSON.stringify(email),
      }),
    }),
    usersResetPasswordConfirm: builder.mutation({
      query: (args) => ({
        url: "users/reset_password_confirm/",
        method: "POST",
        body: JSON.stringify(args),
      }),
    }),
    // usersMe : builder.query ({
    //     queryFn : async (args, api, extraOptions) => {
    //         const response = await api.fetchBaseQuery({ url: "users/me/", headers: headers });
    //         return response.data;
    //     }
    // })
  }),
});

export const {
  useUsersMutation,
  useUsersActivationMutation,
  useUsersResendActivationMutation,
  useUsersResetPasswordMutation,
  useUsersResetPasswordConfirmMutation,
} = usersApi;
