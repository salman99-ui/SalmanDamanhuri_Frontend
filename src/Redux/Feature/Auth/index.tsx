import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const apiAuth = createApi({
  reducerPath: 'api/auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUsersQuery } = apiAuth;
