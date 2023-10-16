import { NavLink, Link } from 'react-router-dom';

import iconSrc from '../../resources/icons/logo-black.svg';
import './appHeader.scss';

const AppHeader = () => {


	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<Link to='/character'>
						<img src={iconSrc} alt="logo" className="header__logo" />
					</Link>
					<div className="header__links">
						<NavLink to='/character' className='header__link'>
							Characters
						</NavLink>
						<NavLink to='/location' className='header__link'>
							Locations
						</NavLink>
						<NavLink to='/episode' className='header__link'>
							Episodes
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	);
}

export default AppHeader;