import { useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

const AppHeaderMobile = ({ links }) => {
	const [showLinks, setShowLinks] = useState(false);

	const toggleShowLinks = () => {
		setShowLinks(!showLinks);
	}

	const elems = (
		<div className="header__portal">
			{ links }
		</div>
	);

	return (
		<div className="header__links" onClick={toggleShowLinks}>
			<span></span>
			<span></span>
			<span></span>
			<CSSTransition
				classNames='header__portal'
				timeout={300}
				in={showLinks}
				unmountOnExit
			>
				<Portal showLinks={showLinks} elems={elems} />
			</CSSTransition>
		</div>
	);
}

const Portal = ({ showLinks, elems }) => {
	return showLinks && createPortal(
		elems,
		document.querySelector('#root')
	);
}

export default AppHeaderMobile;