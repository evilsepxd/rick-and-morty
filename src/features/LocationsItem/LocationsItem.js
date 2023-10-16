import { Link } from 'react-router-dom';

import './locationsItem.scss';
import '../../style/title.scss';

const LocationsItem = (props) => {
	const { name, type, id } = props;

	return (
		<Link to={`/location/${id}`} className="locations__item">
			<div className="locations__item-inner">
				<h2 className="locations__item-title title title_card">{name}</h2>
				<div className="locations__item-descr subtitle">{type}</div>
			</div>
		</Link>
	);
}

export default LocationsItem;