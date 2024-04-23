import { baseApi } from "../baseApi";



const authApi = baseApi.injectEndpoints({
    endpoints:(builder)=> ({
        jwtCreate : builder.mutation({
            query: (loginDetails) => ({
                url : "jwt/create/",
                method : "POST",
                body : JSON.stringify(loginDetails)
            }),
        }),
        jwtRefresh : builder.mutation({
            query: (refeshToken : string) => ({
                url : "jwt/refresh/",
                method : "POST",
                body : JSON.stringify(refeshToken)
            }),
        }),
        jwtVerify : builder.mutation({
            query : (accessToken : string ) => ({
                url : "jwt/verify/",
                method : "POST",
                body : JSON.stringify(accessToken)
            })
        })
    })
})

// export const { useJwtCreateMutation, } = authApi