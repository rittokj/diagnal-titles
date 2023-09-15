import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const TitleCardLoader = () => {
	const { isLoaded } = useSelector((state) => state.titles);

	return !isLoaded
		? [1, 2, 3, 4, 5, 6].map((_, i) => {
				return (
					<Grid
						item
						xs={6}
						sm={4}>
						<Grid
							style={{
								aspectRatio: '2/3',
							}}
							container
							position='relative'>
							<Skeleton
								variant='overlay'
								width='100%'
								height='90%'>
								<img
									alt=''
									src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
								/>
							</Skeleton>
							<Skeleton
								width={`${(i % 4) + 5}0%`}
								height={40}></Skeleton>
						</Grid>
					</Grid>
				);
		  })
		: null;
};

export default TitleCardLoader;
