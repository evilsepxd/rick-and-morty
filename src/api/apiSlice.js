import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: '/api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
	tagTypes: ['Characters', 'Episodes', 'Locations'],
	endpoints: builder => ({
		getCharacters: builder.query({
			query: ({
				page,
				name,
				status,
				species,
				gender
			}) => {
				let request = `/character?page=${page}`;
				if (name) request += `&name=${name}`;
				if (status) request += `&status=${status}`;
				if (species) request += `&species=${species}`;
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
		getMultipleCharactersInfo: builder.query({
			query: ids => `/character/${ids}`,
			transformResponse: data => {
				if (Array.isArray(data)) {
					return data.map(item => ({
						name: item.name,
						image: item.image,
						species: item.species,
						id: item.id
					}))
				} else {
					return ({
						name: data.name,
						image: data.image,
						species: data.species,
						id: data.id
					});
				}
			},
			providesTags: ['Characters']
		}),
		getLocations: builder.query({
			query: ({
				page,
				name,
				type,
				dimension
			}) => {
				let request = `/location?page=${page}`;
				if (name) request += `&name=${name}`;
				if (type) request += `&type=${type}`;
				if (dimension) request += `&dimension=${dimension}`;
				console.log(request);
				return request;
			},
			transformResponse: response => response.results,
			providesTags: ['Locations']
		}),
		getSingleInfo: builder.query({
			query: ({ dataID, pageType }) => {
				console.log(`/${pageType}/${dataID}`);
				return `/${pageType}/${dataID}`;
			},
			transformResponse: data => {
				if (/location\/\d*$/.test(data.url)) {
					return ({
						name: data.name,
						firstTitle: data.type,
						secondTitle: data.dimension,
						characters: data.residents
					});
				} else {
					return ({
						name: data.name,
						firstTitle: data.episode,
						secondTitle: data.air_date,
						characters: data.characters
					});
				}
			},
			providesTags: ['Locations', 'Episodes']
		}),
		getEpisodes: builder.query({
			query: ({ page, name }) => {
				let request = `/episode?page=${page}`;
				if (name) request += `&name=${name}`;
				console.log(request);
				return request;
			},
			transformResponse: response => response.results,
			providesTags: ['Episodes']
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
		}),
	})
});

export const { useGetCharactersQuery,
			useGetSingleCharacterQuery,
			useGetMultipleCharactersInfoQuery,
			useGetLocationsQuery,
			useGetSingleInfoQuery,
			useGetMultipleEpisodesInfoQuery,
			useGetEpisodesQuery } = apiSlice;