import { ApiService } from '../../services/apiServices';
import { setIsloaded, setTitles } from './slices';

export const getTitles = () => (dispatch) => {
	return new Promise((resolve, reject) => {
		ApiService.getTitles()
			.then((res) => {
				console.log('res: ', res);
				dispatch(
					setTitles({
						title: res.data.page.title,
						data: res.data.page['content-items'].content,
					})
				);
				dispatch(setIsloaded(true));
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
};
