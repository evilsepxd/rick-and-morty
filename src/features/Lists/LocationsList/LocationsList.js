import LocationsItem from '../../ListItems/LocationsItem';
import Spinner from '../../Spinner/Spinner';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

import { useGetLocationsQuery } from '../../../api/apiSlice';
import {
	clearLocations,
	filtersUpdated,
	locationsUpdate,
	pageIncreased,
	clearPage
} from './locationsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import '../listStyle.scss';
import '../../../style/button.scss';

const LocationsList = () => {

	const page = useSelector(state => state.locations.page);
	const locations = useSelector(state => state.locations.locations);
	const isFiltersUpdated = useSelector(state => state.locations.filtersUpdated);

	const {
		name,
		type,
		dimension
	} = useSelector(state => state.locations.filters);

	const {
		data = {},
		isLoading,
		isFetching,
		isError
	} = useGetLocationsQuery(
		{ page, name, type, dimension }
	);
	const { results = [], info = {} } = data;
	const pages = info.pages;

	const dispatch = useDispatch();

	useEffect(() => {
		if (isFiltersUpdated) {
			dispatch(clearLocations());
			dispatch(clearPage(1));
			dispatch(filtersUpdated(false));
		}
		if (					// проверяем, есть ли в сторе элемент с таким же id,
			!(				// как в данных, которые приходят с API
				locations.length 
				&& locations[locations.length - 1]?.id === results[results.length - 1]?.id
			)
		) {
			dispatch(locationsUpdate(results));
		}
	}, [results]);

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
		dispatch(pageIncreased())
	}

	if (isLoading) return <Spinner />;
	if (isError) return <ErrorMessage />;

	const elements = renderLocations(locations);
	return (
		<>
			<div className='locations__list'>
				{ elements }
			</div>
			<button className="btn" onClick={loadMore} disabled={isFetching || page >= pages}>LOAD MORE</button>
		</>
	);
}

export default LocationsList;