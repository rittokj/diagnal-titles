import { BASE_URL } from '../constants/constants';
import { HttpClient } from './httpsServices';

// Get Titles
const getTitles = () => {
	const url = `${BASE_URL}/data/page1.json`;
	return HttpClient.get(url);
};

export const ApiService = {
	getTitles,
};
