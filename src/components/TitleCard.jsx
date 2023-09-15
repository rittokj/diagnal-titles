import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const StyledFooter = styled(Grid)(({ theme }) => ({
	position: 'absolute',
	bottom: 0,
	backgroundColor: theme.palette.background.default,
	width: '100%',
	padding: '0.5rem 0rem',
}));

const TitleCard = ({ item }) => {
	return (
		<Grid
			container
			position='relative'>
			<Grid
				item
				xs={12}>
				<img
					src={`https://test.create.diagnal.com/images/${item['poster-image']}`}
					alt='green iguana'
					style={{
						width: '100%',
					}}
				/>
			</Grid>
			<StyledFooter
				item
				xs={12}>
				<Typography variant='body1'>{item.name}</Typography>
			</StyledFooter>
		</Grid>
	);
};

export default TitleCard;
