import { Link } from 'react-router-dom';

import './listItem.scss';
import '../../style/title.scss';

const LocationsItem = (props) => {
	const { name, type, id } = props;

	return (
		<Link to={`/location/${id}`} className="list__item">
			<div className="list__item-inner">
				<h2 className="list__item-title title title_card">{name}</h2>
				<div className="list__item-descr subtitle">{type}</div>
			</div>
		</Link>
	);
}

export default LocationsItem;