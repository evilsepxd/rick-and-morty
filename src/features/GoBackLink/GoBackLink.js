import { useNavigate, Link } from 'react-router-dom';

import arrowImgSrc from '../../resources/icons/arrow_back_24px.svg';
import './goBackLink.scss';

const GoBackLink = () => {
	const navigate = useNavigate();

	return (
		<Link onClick={() => navigate(-1)} className="go-back-link">
			<img src={arrowImgSrc} alt="go back" className="go-back-link__icon" />
			<div className="go-back-link__text">GO BACK</div>
		</Link>
	);
}

export default GoBackLink;