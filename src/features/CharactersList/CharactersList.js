import CharactersItem from '../CharactersItem/CharactersItem';

import './charactersList.scss';
import '../../style/button.scss';

const CharactersList = () => {


	return (
		<>
			<div className='characters__list'>
				<CharactersItem />
				<CharactersItem />
				<CharactersItem />
				<CharactersItem />
				<CharactersItem />
				<CharactersItem />
				<CharactersItem />
				<CharactersItem />
			</div>
			<button className="btn">LOAD MORE</button>
		</>
	);
}

export default CharactersList;