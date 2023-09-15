import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import Grid from '@mui/material/Grid';

import { getTitles } from './actions';
import TitleCard from '../../components/TitleCard';
import Layout from '../../components/Layout';
import EmptyPlaceholder from '../../components/EmptyPlaceholder';
// import TitleCardLoader from '../../components/TitleCardLoader';

const Dashboard = ({ scrollPosition }) => {
	const listInnerRef = useRef();
	const [dataToDisplay, setDataToDisplay] = useState([]);
	const { data, isLoaded, page, searchKey, fetchCompleted } = useSelector(
		(state) => state.titles
	);

	useEffect(() => {
		const searchedItems = Boolean(searchKey)
			? data.filter((i) =>
					i.name.toLowerCase().includes(searchKey.toLowerCase())
			  )
			: data;

		const remainingItems = searchedItems?.length ? searchedItems.length % 3 : 0;

		const newArray = remainingItems
			? searchedItems.slice(0, searchedItems.length - remainingItems)
			: searchedItems;
		setDataToDisplay(newArray);
	}, [searchKey, data?.length]);

	const dispatch = useDispatch();

	const fetchData = (page) => {
		dispatch(getTitles(page)).catch(() => {});
	};
	useEffect(() => {
		if (!isLoaded) fetchData(1);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const onScroll = () => {
		if (listInnerRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
			if (scrollTop + clientHeight === scrollHeight) {
				if (!fetchCompleted) fetchData(page + 1);
			}
		}
	};

	return (
		<Layout>
			<Grid
				onScroll={onScroll}
				ref={listInnerRef}
				style={{ height: '100vh', overflowY: 'auto' }}
				container
				spacing={4}>
				{dataToDisplay?.length ? (
					dataToDisplay.map((item, index) => (
						<Grid
							id={'item' + index}
							key={item.name + index}
							item
							xs={6}
							sm={4}>
							<TitleCard
								item={item}
								scrollPosition={scrollPosition}
							/>
						</Grid>
					))
				) : (
					<EmptyPlaceholder />
				)}
				{/* <TitleCardLoader /> */}
			</Grid>
		</Layout>
	);
};

export default trackWindowScroll(Dashboard);
