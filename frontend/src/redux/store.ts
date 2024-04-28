"use client";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "./features/baseApi";
import authReducer ,{AuthState}  from "./features/auth/authSlice"; 

export interface RootState {
  auth: ReturnType<typeof authReducer>,
}

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth:authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware);
  },
  devTools: true,
});

setupListeners(store.dispatch);