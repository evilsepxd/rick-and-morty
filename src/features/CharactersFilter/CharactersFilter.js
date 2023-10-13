

import './charactersFilter.scss';

const CharactersFilter = () => {


	return (
		<form className='characters__form'>
			<div className="characters__input-wrapper">
				<input className='characters__input characters__input_text' name='name' placeholder='Filter by name...'/>
				<label htmlFor='name'/>
			</div>
			<div className="characters__input-wrapper">
				<select className='characters__input characters__input_select' as='select' name='species'>
					<option value='' className='characters__input-option'>
						Species
					</option>
					<option className='characters__input-option'>
						С сервера
					</option>
				</select>
				<label htmlFor='species'/>
			</div>
			<div className="characters__input-wrapper">
				<select className='characters__input characters__input_select' as='select' name='gender'>
					<option value='' className='characters__input-option'>
						Gender
					</option>
					<option className='characters__input-option'>
						С сервера
					</option>
				</select>
				<label htmlFor='gender'/>
			</div>
			<div className="characters__input-wrapper">
				<select className='characters__input characters__input_select' as='select' name='status'>
					<option value='' className='characters__input-option'>
						Status
					</option>
					<option className='characters__input-option'>
						С сервера
					</option>
				</select>
				<label htmlFor='status'/>
			</div>
		</form>
	);
}

export default CharactersFilter;