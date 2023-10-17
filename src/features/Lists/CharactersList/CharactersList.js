import CharactersItem from '../../ListItems/CharactersItem/CharactersItem';
import Spinner from '../../Spinner/Spinner';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

import { useGetCharactersQuery } from '../../../api/apiSlice';
import {
	charactersUpdate,
	filtersUpdated,
	clearCharacters
} from './charactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import './charactersList.scss';
import '../../../style/button.scss';

const CharactersList = () => {

	const [page, setPage] = useState(1);
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
			dispatch(filtersUpdated(false));
		}
		dispatch(charactersUpdate(results));
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
		setPage(page => page + 1);
	}

	if (isLoading) return <Spinner />;
	if (isError) return <ErrorMessage />;

	const elements = renderCharacters(characters);
	return (
		<>
			<div className='characters__list'>
				{ elements }
			</div>
			<button className="btn" onClick={loadMore} disabled={isFetching || page >= pages}>LOAD MORE</button>
		</>
	);
}

export default CharactersList;