import { BASE_URL } from '../constants/constants';
import { HttpClient } from './httpsServices';

// Get Titles
const getTitles = (page) => {
	const url = `${BASE_URL}/data/page${page}.json`;
	return HttpClient.get(url);
};

export const ApiService = {
	getTitles,
};
