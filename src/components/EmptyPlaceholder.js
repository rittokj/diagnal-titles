import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchOffIcon from '@mui/icons-material/SearchOff';
const EmptyPlaceholder = () => {
	return (
		<Grid
			item
			xs={12}
			mt={15}
			display='flex'
			alignItems='center'
			flexDirection='column'>
			<SearchOffIcon
				style={{
					width: '7.5rem',
					height: '7.5rem',
					opacity: 0.7,
				}}
			/>
			<Typography
				color='GrayText'
				variant='subtitle1'>
				No items found
			</Typography>
		</Grid>
	);
};

export default EmptyPlaceholder;
