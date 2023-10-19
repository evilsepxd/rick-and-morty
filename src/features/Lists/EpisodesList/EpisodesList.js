import EpisodesItem from '../../ListItems/EpisodesItem';
import Spinner from '../../Spinner/Spinner';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

import { useGetEpisodesQuery } from '../../../api/apiSlice';
import {
	episodesUpdate,
	filtersUpdated,
	clearEpisodes,
	pageIncreased,
	clearPage
} from './episodesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import '../listStyle.scss';
import '../../../style/button.scss';

const EpisodesList = () => {

	const page = useSelector(state => state.episodes.page);
	const episodes = useSelector(state => state.episodes.episodes);
	const isFiltersUpdated = useSelector(state => state.episodes.filtersUpdated);

	const name = useSelector(state => state.episodes.filter);

	const {
		data = {},
		isLoading,
		isFetching,
		isError
	} = useGetEpisodesQuery({ page, name });
	const { results = [], info = {} } = data;
	const pages = info.pages;

	const dispatch = useDispatch();

	useEffect(() => {
		if (isFiltersUpdated) {
			dispatch(clearEpisodes());
			dispatch(clearPage(1));
			dispatch(filtersUpdated(false));
		}
		if (					// проверяем, есть ли в сторе элемент с таким же id,
			!(				// как в данных, которые приходят с API
				episodes.length 
				&& episodes[episodes.length - 1]?.id === results[results.length - 1]?.id
			)
		) {
			dispatch(episodesUpdate(results));
		}
	}, [results]);

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
		dispatch(pageIncreased());
	}

	if (isLoading) return <Spinner />;
	if (isError) return <ErrorMessage />;

	const elements = renderEpisodes(episodes);
	return (
		<>
			<div className='list'>
				{ elements }
			</div>
			<button className="btn" onClick={loadMore} disabled={isFetching || page >= pages}>LOAD MORE</button>
		</>
	);
}

export default EpisodesList;