import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: (build) => ({
        getUserAccount: build.query({
            query: (id) => `user/${id}`
        }),
        createUserAccount: build.mutation({
            query: (body) => ({
                url: 'user',
                method: 'POST',
                body: body
            }),
        }),
        deleteUserAccount: build.mutation({
            query: (id) => ({
                url: `user/${id}`,
                method: 'DELETE'
            }),
        }),
        updateUserAccount: build.mutation({
            query: ({ id, body }) => ({
                url: `user/${id}`,
                method: 'PATCH',
                body: body
            }),
        }),
    }),
});

export const { useGetUserAccountQuery, useCreateUserAccountMutation, useUpdateUserAccountMutation, useDeleteUserAccountMutation } = userApi;