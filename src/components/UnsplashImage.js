import Grid from '@mui/material/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { BASE_URL, BROKEN_IMAGE } from '../constants/constants';

const UnsplashImage = ({ item, scrollPosition }) => {
	const itemUrl = `${BASE_URL}/images/${item['poster-image']}`;

	const addDefaultSrc = (e) => (e.target.src = `${BASE_URL}${BROKEN_IMAGE}`);

	return (
		<Grid
			item
			xs={12}>
			<LazyLoadImage
				alt={item.name}
				width={'100%'}
				scrollPosition={scrollPosition}
				src={itemUrl}
				visibleByDefault
				onError={addDefaultSrc}
			/>
		</Grid>
	);
};

export default UnsplashImage;
