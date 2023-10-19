import CharactersItem from '../../ListItems/CharactersItem/CharactersItem';
import Spinner from '../../Spinner/Spinner';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

import { useGetCharactersQuery } from '../../../api/apiSlice';
import {
	charactersUpdate,
	filtersUpdated,
	clearCharacters,
	pageIncreased,
	clearPage
} from './charactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import '../listStyle.scss';
import '../../../style/button.scss';

const CharactersList = () => {

	const page = useSelector(state => state.characters.page);
	const characters = useSelector(state => state.characters.characters);
	const isFiltersUpdated = useSelector(state => state.characters.filtersUpdated);

	const {
		name,
		species,
		gender,
		status
	} = useSelector(state => state.characters.filters);

	const {
		data = {},
		isLoading,
		isFetching,
		isError
	} = useGetCharactersQuery(
		{ page, name, species, gender, status }
	);
	const { results = [], info = {} } = data;
	const pages = info.pages;

	const dispatch = useDispatch();

	useEffect(() => {
		if (isFiltersUpdated) {
			dispatch(clearCharacters());
			dispatch(clearPage(1));
			dispatch(filtersUpdated(false));
		}
		if (					// проверяем, есть ли в сторе элемент с таким же id,
			!(				// как в данных, которые приходят с API
				characters.length 
				&& characters[characters.length - 1]?.id === results[results.length - 1]?.id
			)
		) {
			dispatch(charactersUpdate(results));
		}
	}, [results]);

	const renderCharacters = (chars) => {
		return chars.map(char => {
			return <CharactersItem
					name={char.name}
					image={char.image}
					species={char.species}
					id={char.id}
					key={char.id}
					/>;
		});
	}

	const loadMore = () => {
		dispatch(pageIncreased());
	}

	if (isLoading) return <Spinner />;
	if (isError) return <ErrorMessage />;

	const elements = renderCharacters(characters);
	return (
		<>
			<div className='list list_characters'>
				{ elements }
			</div>
			<button className="btn" onClick={loadMore} disabled={isFetching || page >= pages}>LOAD MORE</button>
		</>
	);
}

export default CharactersList;