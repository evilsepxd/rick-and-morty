import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	characters: [],
	filters: {
		name: '',
		species: '',
		gender: '',
		status: ''
	}
};

const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		filtersChanged: (state, action) => {
			state.filters = action.payload;
		},
		charactersUpdate: (state, action) => {
			state.characters.push(...action.payload);
		}
	}
});

export const { filtersChanged, pageIncreased, charactersUpdate } = charactersSlice.actions;

export default charactersSlice.reducer;