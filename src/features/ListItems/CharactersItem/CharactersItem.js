import { Link } from 'react-router-dom';

import './charactersItem.scss';
import '../../../style/title.scss';

const CharactersItem = (props) => {
	const { name, image, species, id } = props;

	return (
		<Link to={`/character/${id}`} className="characters__item">
			<img src={image} alt={name} className="characters__item-img" />
			<div className="characters__item-inner">
				<h2 className="characters__item-title title title_card">{name}</h2>
				<div className="characters__item-descr subtitle">{species}</div>
			</div>
		</Link>
	);
}

export default CharactersItem;