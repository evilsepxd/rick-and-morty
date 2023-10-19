import { NavLink, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import AppHeaderMobile from './AppHeaderMobile';

import iconSrc from '../../resources/icons/logo-black.svg';
import './appHeader.scss';

const AppHeader = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
	const links = (
		<>
			<NavLink to='/character' className='header__link'>
				Characters
			</NavLink>
			<NavLink to='/location' className='header__link'>
				Locations
			</NavLink>
			<NavLink to='/episode' className='header__link'>
				Episodes
			</NavLink>
		</>
	);

	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<Link to='/character'>
						<img src={iconSrc} alt="logo" className="header__logo" />
					</Link>
					{
						isMobile
						? <AppHeaderMobile links={links} />
						: <AppHeaderBigScreen links={links} />
					}
				</div>
			</div>
		</header>
	);
}

const AppHeaderBigScreen = ({ links }) => {
	return (
		<div className="header__links">
			{ links }
		</div>
	)
}

export default AppHeader;