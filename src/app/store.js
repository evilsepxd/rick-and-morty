import { apiSlice } from '../api/apiSlice';
import characters from '../features/CharactersList/charactersSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		characters
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;