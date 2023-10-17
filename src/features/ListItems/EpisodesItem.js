import { Link } from 'react-router-dom';

import './listItem.scss';
import '../../style/title.scss';

const EpisodesItem = (props) => {

	const { name, date, episode, id } = props;

	return (
		<Link to={`/episode/${id}`} className="list__item">
			<div className="list__item-inner">
				<h2 className="list__item-title title title_card">{name}</h2>
				<div className="list__item-descr subtitle">{date}</div>
				<div className="list__item-number descr">{episode}</div>
			</div>
		</Link>
	);
}

export default EpisodesItem;