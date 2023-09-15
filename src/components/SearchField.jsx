import * as React from 'react';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';

import { UseDebounce } from '../utils/debounce';
import { triggerSearch } from '../page/dashboard/actions';

function SearchField() {
	const dispatch = useDispatch();
	const [checked, setChecked] = React.useState(false);
	const [searchKey, setSearchKey] = React.useState('');

	const handleClick = () => {
		setSearchKey('');
		setChecked((prev) => !prev);
	};

	const debounceSearch = (key) => {
		dispatch(triggerSearch(key));
	};

	UseDebounce(() => debounceSearch(searchKey), [searchKey], 300);

	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Collapse
				in={checked}
				orientation='horizontal'>
				<TextField
					size='small'
					variant='outlined'
					style={{
						width: 200,
						marginRight: 20,
					}}
					InputProps={{
						style: { borderRadius: 20 },
					}}
					value={searchKey}
					placeholder='Search'
					autoFocus
					onChange={(e) => setSearchKey(e.target.value)}
				/>
			</Collapse>
			<IconButton
				size='large'
				onClick={handleClick}
				aria-label='search'
				color='inherit'>
				{checked ? (
					<Fade in>
						<CloseIcon />
					</Fade>
				) : (
					<Fade in>
						<SearchIcon />
					</Fade>
				)}
			</IconButton>
		</Box>
	);
}

export default SearchField;
