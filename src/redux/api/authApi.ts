import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const authApi = createApi({
reducerPath:'api/auth',
baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8080/api/v1/auth/"}),
endpoints: (build)=>({
    signUp: build.mutation({
        query:(body)=>({
            url:'register',
            method:'POST',
            body,
        })
    }),

    signIn: build.mutation({
        query:(body)=>({
            url:'authenticate',
            method:'POST',
            body,
        })
    })
})
})

export const {useSignUpMutation, useSignInMutation} = authApi;