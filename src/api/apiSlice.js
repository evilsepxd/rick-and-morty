import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: '/api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
	tagTypes: ['Characters', 'Filters'],
	endpoints: builder => ({
		getCharacters: builder.query({
			query: ({
				page,
				name,
				status,
				species,
				type,
				gender
			}) => {
				let request = `/character?page=${page}`;
				if (name) request += `&name=${name}`;
				if (status) request += `&status=${status}`;
				if (species) request += `&species=${species}`;
				if (type) request += `&type=${type}`;
				if (gender) request += `&gender=${gender}`;
				console.log(request);
				return request;
			},
			transformResponse: response => response.results,
			providesTags: ['Characters']
		})
	})
});

export const { useGetCharactersQuery } = apiSlice;