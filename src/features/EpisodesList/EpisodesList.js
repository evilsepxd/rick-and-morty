import EpisodesItem from '../EpisodesItem/EpisodesItem';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { useGetEpisodesQuery } from '../../api/apiSlice';
import {
	episodesUpdate,
	filtersUpdated,
	clearEpisodes
} from './episodesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import '../../style/listStyle.scss';

const EpisodesList = () => {

	const [page, setPage] = useState(1);
	const episodes = useSelector(state => state.episodes.episodes);
	const isFiltersUpdated = useSelector(state => state.episodes.filtersUpdated);

	const name = useSelector(state => state.episodes.filter);

	const {
		data = [],
		isLoading,
		isFetching,
		isError
	} = useGetEpisodesQuery({ page, name });

	const dispatch = useDispatch();

	useEffect(() => {
		if (isFiltersUpdated) {
			dispatch(clearEpisodes());
			dispatch(filtersUpdated(false));
		}
		dispatch(episodesUpdate(data));
	}, [data]);

	const renderEpisodes = (episodes) => {
		return episodes.map(item => {
			return <EpisodesItem
					name={item.name}
					date={item.air_date}
					episode={item.episode}
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

	const elements = renderEpisodes(episodes);
	return (
		<>
			<div className='locations__list'>
				{ elements }
			</div>
			<button className="btn" onClick={loadMore} disabled={isFetching}>LOAD MORE</button>
		</>
	);
}

export default EpisodesList;