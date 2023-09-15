import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const CardFooter = styled(Grid)(({ theme }) => ({
	position: 'absolute',
	bottom: 0,
	backgroundColor: theme.palette.background.default,
	width: '100%',
	padding: '0.5rem 0rem',
}));

export default CardFooter;
