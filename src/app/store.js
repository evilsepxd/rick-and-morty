import { apiSlice } from '../api/apiSlice';
import characters from '../features/Lists/CharactersList/charactersSlice';
import locations from '../features/Lists/LocationsList/locationsSlice';
import episodes from '../features/Lists/EpisodesList/episodesSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		characters,
		locations,
		episodes
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;