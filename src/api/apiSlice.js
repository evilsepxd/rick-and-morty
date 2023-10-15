import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: '/api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
	tagTypes: ['Characters', 'Episodes'],
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
		}),
		getSingleCharacter: builder.query({
			query: id => `/character/${id}`,
			transformResponse: data => ({
				name: data.name,
				status: data.status,
				species: data.species,
				type: data.type,
				gender: data.gender,
				origin: data.origin,
				location: data.location,
				image: data.image,
				episode: data.episode.slice(0, 4)
			}),
			providesTags: ['Characters']
		}),
		getMultipleEpisodesInfo: builder.query({
			query: ids => `/episode/${ids}`,
			transformResponse: data => {
				if (Array.isArray(data)) {
					return data.map(item => ({
						episode: item.episode,
						name: item.name,
						date: item.air_date
					}))
				} else {
					return ({
						episode: data.episode,
						name: data.name,
						date: data.air_date
					});
				}
			},
			providesTags: ['Episodes']
		})
	})
});

export const { useGetCharactersQuery,
			useGetSingleCharacterQuery,
			useGetMultipleEpisodesInfoQuery } = apiSlice;