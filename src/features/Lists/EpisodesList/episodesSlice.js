import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	episodes: [],
	filter: '',
	filtersUpdated: false,
	page: 1
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
		},
		pageIncreased: state => {
			state.page++;
		},
		clearPage: (state, action) => {
			state.page = action.payload;
		}
	}
});

export const {
	episodesUpdate,
	filterNameUpdated,
	filtersUpdated,
	clearEpisodes,
	pageIncreased,
	clearPage
} = episodesSlice.actions;

export default episodesSlice.reducer;