import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61ed7ce9634f2f00170cec1d.mockapi.io/phonebook',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
    }),
  }),
});

export const { useFetchContactsQuery } = contactsApi;
