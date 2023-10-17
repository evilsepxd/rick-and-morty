import { useDispatch } from 'react-redux';

import {
	filterNameUpdated,
	filtersUpdated
} from '../Lists/EpisodesList/episodesSlice';

import './filters.scss';

const EpisodesFilter = () => {

	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(filtersUpdated(true));
		dispatch(filterNameUpdated(e.target.value));
	}

	return (
		<form className='filters__form'>
			<div className="filters__input-wrapper">
				<input 
					className='filters__input filters__input_text filters__input_xl' 
					name='name' 
					placeholder='Filter by name or episode (ex. S01 or S01E02)'
					onChange={handleChange}
				/>
				<label htmlFor='name'/>
			</div>
		</form>
	);
}

export default EpisodesFilter;