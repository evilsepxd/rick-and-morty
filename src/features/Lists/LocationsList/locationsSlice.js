import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	locations: [],
	filters: {
		name: '',
		type: '',
		dimension: ''
	},
	filtersUpdated: false
}

const locationsSlice = createSlice({
	name: 'locations',
	initialState,
	reducers: {
		filtersUpdated: (state, action) => { state.filtersUpdated = action.payload },
		clearLocations: state => {
			state.locations = [];
		},
		locationsUpdate: (state, action) => {
			state.locations.push(...action.payload);
		},
		filtersNameChanged: (state, action) => {
			state.filters.name = action.payload;
		},
		filtersTypeChanged: (state, action) => {
			state.filters.type = action.payload;
		},
		filtersDimensionChanged: (state, action) => {
			state.filters.dimension = action.payload;
		},
	}
});

export const {
	filtersUpdated,
	clearLocations,
	locationsUpdate,
	filtersNameChanged,
	filtersTypeChanged,
	filtersDimensionChanged
} = locationsSlice.actions;

export default locationsSlice.reducer;