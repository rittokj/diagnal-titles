import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from '../page/dashboard/slices';

export const store = configureStore({
	reducer: {
		titles: dashboardSlice,
	},
});
