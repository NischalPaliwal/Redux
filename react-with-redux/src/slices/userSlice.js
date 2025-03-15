import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: (build) => ({
        getUserAccount: build.query({
            query: (id) => `user/${id}`,
            providesTags: ['user']
        }),
        createUserAccount: build.mutation({
            query: (body) => ({
                url: 'user',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['user']
        }),
        deleteUserAccount: build.mutation({
            query: (id) => ({
                url: `user/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['user']
        }),
        updateUserAccount: build.mutation({
            query: ({ id, body }) => ({
                url: `user/${id}`,
                method: 'PATCH',
                body: body
            }),
            invalidatesTags: ['user']
        }),
    }),
});

export const { useGetUserAccountQuery, useCreateUserAccountMutation, useUpdateUserAccountMutation, useDeleteUserAccountMutation } = userApi;