import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	episodes: [],
	filter: '',
	filtersUpdated: false
}

const episodesSlice = createSlice({
	name: 'episodes',
	initialState,
	reducers: {
		episodesUpdate: (state, action) => {
			state.episodes.push(...action.payload)
		},
		filterNameUpdated: (state, action) => {
			state.filter = action.payload
		},
		clearEpisodes: (state) => {
			state.episodes = []
		},
		filtersUpdated: (state, action) => {
			state.filtersUpdated = action.payload
		}
	}
});

export const {
	episodesUpdate,
	filterNameUpdated,
	filtersUpdated,
	clearEpisodes
} = episodesSlice.actions;

export default episodesSlice.reducer;