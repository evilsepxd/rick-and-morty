import CharactersFilter from '../CharactersFilter/CharactersFilter';
import CharactersList from '../CharactersList/CharactersList';

import imgSrc from '../../resources/img/logo.svg';
import './characters.scss';


const Characters = () => {


	return (
		<div className="characters">
			<div className="container">
				<div className="characters__inner">
					<img src={imgSrc} alt="logo" className="characters__img" />
					<CharactersFilter />
					<CharactersList />
				</div>
			</div>
		</div>
	);
}

export default Characters;