import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: '/api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
	tagTypes: ['Characters', 'Filters'],
	endpoints: builder => ({
		getCharacters: builder.query({
			query: charactersPage => `/character?page=${charactersPage}`,
			transformResponse: response => response.results,
			providesTags: ['Characters']
		})
	})
});

export const { useGetCharactersQuery } = apiSlice;