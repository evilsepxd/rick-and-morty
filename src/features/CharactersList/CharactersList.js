import CharactersItem from '../CharactersItem/CharactersItem';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { useGetCharactersQuery } from '../../api/apiSlice';
import { charactersUpdate } from './charactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import './charactersList.scss';
import '../../style/button.scss';

const CharactersList = () => {

	const [page, setPage] = useState(1);
	const characters = useSelector(state => state.characters.characters);

	const {
		data = [],
		isLoading,
		isFetching,
		isError
	} = useGetCharactersQuery(page);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(charactersUpdate(data))
	}, [data]);


	const renderCharacters = (chars) => {
		return chars.map(char => {
			return <CharactersItem
					name={char.name}
					image={char.image}
					species={char.species}
					key={char.id}
					/>;
		});
	}

	const handleClick = () => {
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
			<button className="btn" onClick={handleClick} disabled={isFetching}>LOAD MORE</button>
		</>
	);
}

export default CharactersList;