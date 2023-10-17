import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	episodes: [],
	filter: ''
}

const episodesSlice = createSlice({
	name: 'episodes',
	initialState,
	reducers: {
		episodesUpdated: (state, action) => {
			state.episodes.push(action.payload)
		},
		filtersUpdated: (state, action) => {
			state.filter = action.payload
		},
		clearEpisodes: (state) => {
			state.episodes = []
		}
	}
});

export default episodesSlice.reducer;

export const {
	episodesUpdated,
	filtersUpdated,
	clearEpisodes
} = episodesSlice.actions;