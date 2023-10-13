

import './charactersItem.scss';
import '../../style/title.scss';

const CharactersItem = () => {


	return (
		<div className="characters__item">
			<img src="https://pm1.aminoapps.com/6878/7590f2750286a5952f65d5a0ebebc8f328b8163br1-720-901v2_00.jpg" alt="rick" className="characters__item-img" />
			<div className="characters__item-inner">
				<h2 className="characters__item-title title title_card">Rick Sanchez</h2>
				<div className="characters__item-descr subtitle">Human</div>
			</div>
		</div>
	);
}

export default CharactersItem;