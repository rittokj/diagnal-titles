import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@mui/material/Grid';

import { getTitles } from './actions';
import TitleCard from '../../components/TitleCard';
import Layout from '../../components/Layout';

export function Dashboard() {
	const { data, isLoaded } = useSelector((state) => state.titles);
	const dispatch = useDispatch();

	const fetchData = () => {
		console.log('fetchData: ');
		dispatch(getTitles());
	};

	useEffect(() => {
		if (!isLoaded) fetchData();
	}, []);

	return (
		<Layout>
			<Grid
				container
				spacing={4}>
				{data.map((item, index) => (
					<Grid
						key={item.name + index}
						item
						xs={6}
						sm={4}>
						<TitleCard item={item} />
					</Grid>
				))}
			</Grid>
		</Layout>
	);
}
