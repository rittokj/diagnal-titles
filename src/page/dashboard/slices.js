import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	title: '',
	isLoaded: false,
	page: 1,
	fetchCompleted: false,
	searchKey: '',
};

export const slices = createSlice({
	name: 'titles',
	initialState,
	reducers: {
		setData: (state, action) => {
			state.data = [...state.data, ...action.payload.data];
			state.page = action.payload.page;
		},
		setTitle: (state, action) => {
			state.title = action.payload;
		},
		setIsloaded: (state, action) => {
			state.isLoaded = action.payload;
		},
		setFetchCompleted: (state, action) => {
			state.fetchCompleted = action.payload;
		},
		setSearchKey: (state, action) => {
			state.searchKey = action.payload;
		},
	},
});

export const {
	setData,
	setTitle,
	setIsloaded,
	setFetchCompleted,
	setSearchKey,
} = slices.actions;

export default slices.reducer;
