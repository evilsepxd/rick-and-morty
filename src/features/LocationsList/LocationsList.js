import LocationsItem from '../LocationsItem/LocationsItem';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { useGetLocationsQuery } from '../../api/apiSlice';
import {
	clearLocations,
	filtersUpdated,
	locationsUpdate
} from './locationsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import '../../style/listStyle.scss';

const LocationsList = () => {

	const [page, setPage] = useState(1);
	const locations = useSelector(state => state.locations.locations);
	const isFiltersUpdated = useSelector(state => state.locations.filtersUpdated);

	const {
		name,
		type,
		dimension
	} = useSelector(state => state.locations.filters);

	const {
		data = [],
		isLoading,
		isFetching,
		isError
	} = useGetLocationsQuery(
		{ page, name, type, dimension }
	);

	const dispatch = useDispatch();

	useEffect(() => {
		if (isFiltersUpdated) {
			dispatch(clearLocations());
			dispatch(filtersUpdated(false));
		}
		dispatch(locationsUpdate(data));
	}, [data]);

	const renderLocations = (locations) => {
		return locations.map(item => {
			return <LocationsItem
					name={item.name}
					type={item.type}
					id={item.id}
					key={item.id}
					/>;
		});
	}

	const loadMore = () => {
		setPage(page => page + 1);
	}

	if (isLoading) return <Spinner />;
	if (isError) return <ErrorMessage />;

	const elements = renderLocations(locations);
	return (
		<>
			<div className='locations__list'>
				{ elements }
			</div>
			<button className="btn" onClick={loadMore} disabled={isFetching}>LOAD MORE</button>
		</>
	);
}

export default LocationsList;