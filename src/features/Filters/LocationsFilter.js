

import './filters.scss';

const LocationsFilter = () => {
	

	const handleChange = () => {
		return;
	}

	return (
		<form className='filters__form'>
			<div className="filters__input-wrapper">
				<input 
					className='filters__input filters__input_text filters__input_long' 
					name='name' 
					placeholder='Filter by name...'
					onChange={handleChange}
				/>
				<label htmlFor='name'/>
			</div>
			<div className="filters__input-wrapper">
				<select
					className='filters__input filters__input_select' 
					name='species'
					onChange={handleChange}
				>
					<option value='' className='filters__input-option'>
						Type
					</option>
					<option value='planet' className='filters__input-option'>
						Planet
					</option>
					<option value='cluster' className='filters__input-option'>
						Cluster
					</option>
					<option value='space-station' className='filters__input-option'>
						Space station
					</option>
					<option value='microverse' className='filters__input-option'>
						Microverse
					</option>
					<option value='tv' className='filters__input-option'>
						TV
					</option>
					<option value='resort' className='filters__input-option'>
						Resort
					</option>
					<option value='fantasy-town' className='filters__input-option'>
						Fantasy town
					</option>
					<option value='dream' className='filters__input-option'>
						Dream
					</option>
				</select>
				<label htmlFor='species'/>
			</div>
			<div className="filters__input-wrapper">
				<select 
					className='filters__input filters__input_select' 
					name='gender'
					onChange={handleChange}
				>
					<option value='' className='filters__input-option'>
						Dimension
					</option>
					<option value='dimension-C-137' className='filters__input-option'>
						Dimension C-137
					</option>
					<option value='Post-Apocalyptic-Dimension' className='filters__input-option'>
						Post-Apocalyptic Dimension
					</option>
					<option value='Replacement-Dimension' className='filters__input-option'>
						Replacement Dimension
					</option>
					<option value='Cronenberg-Dimension' className='filters__input-option'>
						Cronenberg Dimension
					</option>
					<option value='Fantasy-Dimension' className='filters__input-option'>
						Fantasy Dimension
					</option>
					<option value='Dimension-5-126' className='filters__input-option'>
						Dimension 5-126
					</option>
					<option value='unknown' className='filters__input-option'>
						Unknown
					</option>
				</select>
				<label htmlFor='gender'/>
			</div>
		</form>
	);
}

export default LocationsFilter;