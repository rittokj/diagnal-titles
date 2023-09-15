import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';

function Layout({ children }) {
	const { title } = useSelector((state) => state.titles);
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
							color='inherit'>
							<ArrowBackIcon />
						</IconButton>
						<Typography variant='h5'>{title}</Typography>
					</Typography>
					<Box sx={{ display: 'block' }}>
						<IconButton
							size='large'
							aria-label='search'
							color='inherit'>
							<SearchIcon />
						</IconButton>
					</Box>
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
