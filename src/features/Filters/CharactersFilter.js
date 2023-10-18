import { useDispatch, useSelector } from 'react-redux';

import { filtersNameChanged,
		filtersGenderChanged,
		filtersSpeciesChanged,
		filtersStatusChanged,
		filtersUpdated } from '../Lists/CharactersList/charactersSlice';

import './filters.scss';

const CharactersFilter = () => {

	const dispatch = useDispatch();

	const { name, species, gender, status } = useSelector(state => state.characters.filters);

	const handleChange = (e) => {
		const t = e.target;

		dispatch(filtersUpdated(true));

		switch (t.name) {
			case 'name':
				dispatch(filtersNameChanged(t.value));
				break;
			case 'species':
				dispatch(filtersSpeciesChanged(t.value));
				break;
			case 'gender':
				dispatch(filtersGenderChanged(t.value));
				break;
			case 'status':
				dispatch(filtersStatusChanged(t.value));
				break;
		}
	}

	return (
		<form className='filters__form'>
			<div className="filters__input-wrapper">
				<input 
					className='filters__input filters__input_text' 
					name='name' 
					placeholder='Filter by name...'
					onChange={handleChange}
					value={name}
				/>
				<label htmlFor='name'/>
			</div>
			<div className="filters__input-wrapper">
				<select
					className='filters__input filters__input_select' 
					name='species'
					onChange={handleChange}
					value={species}
				>
					<option value='' className='filters__input-option'>
						Species
					</option>
					<option value='human' className='filters__input-option'>
						Human
					</option>
					<option value='alien' className='filters__input-option'>
						Alien
					</option>
					<option value='humanoid' className='filters__input-option'>
						Humanoid
					</option>
				</select>
				<label htmlFor='species'/>
			</div>
			<div className="filters__input-wrapper">
				<select 
					className='filters__input filters__input_select' 
					name='gender'
					onChange={handleChange}
					value={gender}
				>
					<option value='' className='filters__input-option'>
						Gender
					</option>
					<option value='male' className='filters__input-option'>
						Male
					</option>
					<option value='female' className='filters__input-option'>
						Female
					</option>
					<option value='genderless' className='filters__input-option'>
						Genderless
					</option>
					<option value='unknown' className='filters__input-option'>
						Unknown
					</option>
				</select>
				<label htmlFor='gender'/>
			</div>
			<div className="filters__input-wrapper">
				<select 
					className='filters__input filters__input_select' 
					name='status'
					onChange={handleChange}
					value={status}
				>
					<option value='' className='filters__input-option'>
						Status
					</option>
					<option value='alive' className='filters__input-option'>
						Alive
					</option>
					<option value='dead' className='filters__input-option'>
						Dead
					</option>
					<option value='unknown' className='filters__input-option'>
						Unknown
					</option>
				</select>
				<label htmlFor='status'/>
			</div>
		</form>
	);
}

export default CharactersFilter;