import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	characters: [],
	filters: {
		name: '',
		species: '',
		gender: '',
		status: ''
	},
	filtersUpdated: false,
	page: 1
};

const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		filtersNameChanged: (state, action) => {
			state.filters.name = action.payload;
		},
		filtersSpeciesChanged: (state, action) => {
			state.filters.species = action.payload;
		},
		filtersGenderChanged: (state, action) => {
			state.filters.gender = action.payload;
		},
		filtersStatusChanged: (state, action) => {
			state.filters.status = action.payload;
		},
		filtersUpdated: (state, action) => { state.filtersUpdated = action.payload },
		clearCharacters: state => {
			state.characters = [];
		},
		charactersUpdate: (state, action) => {
			state.characters.push(...action.payload);
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
	filtersNameChanged,
	filtersSpeciesChanged,
	filtersGenderChanged,
	filtersStatusChanged,
	filtersUpdated,
	clearCharacters,
	charactersUpdate,
	pageIncreased,
	clearPage
} = charactersSlice.actions;

export default charactersSlice.reducer;