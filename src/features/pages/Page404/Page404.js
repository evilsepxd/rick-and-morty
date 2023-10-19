import { Link } from 'react-router-dom';

import imgSrc from '../../../resources/img/404.webp';
import arrowImgSrc from '../../../resources/icons/arrow_back_24px.svg';
import './page404.scss';
import '../../GoBackLink/goBackLink.scss';

const Page404 = () => {
	return (
		<div className="page404">
			<h2 className="page404__title">there's no such page...</h2>
			<Link to='/character' className="go-back-link go-back-link_404">
				<img src={arrowImgSrc} alt="go back" className="go-back-link__icon" />
				<div className="go-back-link__text">GO TO MAIN</div>
			</Link>
			<img src={imgSrc} alt="404" className="page404__img" />
		</div>
	);
}

export default Page404;