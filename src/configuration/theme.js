import { createTheme } from '@mui/material/styles';
import { appBgColor, appTextColor } from '../constants/colors';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: appBgColor,
		},
		text: {
			primary: appTextColor,
		},
	},
	typography: {
		fontFamily: 'Titillium Web, sans-serif',
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					height: 80,
					backgroundColor: '#000000',
					background:
						'linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)',
				},
			},
		},
	},
});
