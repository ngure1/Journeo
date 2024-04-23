import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";


const baseUrl : string = 'localhost:8000/'
export const baseApi = createApi({
    baseQuery : fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints : (builder) => ({

    })
})