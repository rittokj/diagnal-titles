import { ApiService } from '../../services/apiServices';
import {
	setIsloaded,
	setTitle,
	setData,
	setFetchCompleted,
	setSearchKey,
} from './slices';

export const getTitles = (page) => (dispatch) => {
	return new Promise((resolve, reject) => {
		dispatch(setIsloaded(false));
		ApiService.getTitles(page)
			.then((res) => {
				dispatch(
					setData({
						page: page,
						data: res.data.page['content-items'].content,
					})
				);
				dispatch(setIsloaded(true));
				if (page === 1) {
					dispatch(setTitle(res.data.page.title));
				}
				dispatch(setIsloaded(true));

				resolve();
			})
			.catch((err) => {
				dispatch(setIsloaded(true));
				dispatch(setFetchCompleted(true));
				reject(err);
			});
	});
};

export const triggerSearch = (searchKey) => (dispatch) => {
	return new Promise((resolve, reject) => {
		dispatch(setSearchKey(searchKey));
	});
};
