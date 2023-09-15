import * as React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Dashboard from './page/dashboard/Dashboard';
import { Provider } from 'react-redux';

import { store } from './store';
import { darkTheme } from './configuration/theme';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Dashboard />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
