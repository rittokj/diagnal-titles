import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import UnsplashImage from './UnsplashImage';
import CardFooter from './CardFooter';

const TitleCard = ({ item, scrollPosition }) => {
	return (
		<Grid
			style={{
				aspectRatio: '2/3',
			}}
			container
			position='relative'>
			<UnsplashImage
				item={item}
				scrollPosition={scrollPosition}
			/>
			<CardFooter
				item
				xs={12}>
				<Typography variant='body1'>{item.name}</Typography>
			</CardFooter>
		</Grid>
	);
};

export default TitleCard;
