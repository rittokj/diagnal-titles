import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	title: '',
	isLoaded: false,
};

export const slices = createSlice({
	name: 'titles',
	initialState,
	reducers: {
		setTitles: (state, action) => {
			state.data = action.payload.data;
			state.title = action.payload.title;
		},
		setIsloaded: (state, action) => {
			state.isLoaded = action.payload;
		},
	},
});

export const { setTitles, setIsloaded } = slices.actions;

export default slices.reducer;
