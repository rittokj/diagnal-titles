import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import SearchField from './SearchField';

function Layout({ children }) {
	const { title } = useSelector((state) => state.titles);

	const scrollToTop = () => {
		const element = document.getElementById('item1');
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		});
	};

	return (
		<Container maxWidth='md'>
			<CssBaseline />
			<AppBar
				elevation={0}
				component='nav'>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
						<IconButton
							size='large'
							aria-label='search'
							onClick={scrollToTop}
							color='inherit'>
							<ArrowBackIcon />
						</IconButton>
						<Typography variant='h5'>{title}</Typography>
					</Typography>
					<SearchField />
				</Toolbar>
			</AppBar>

			<Box
				component='main'
				sx={{
					paddingTop: 2,
				}}>
				<Toolbar />
				{children}
			</Box>
		</Container>
	);
}

Layout.propTypes = {
	window: PropTypes.func,
};

export default Layout;
