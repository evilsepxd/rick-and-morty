import imgSrc from '../../resources/img/error.gif';

import './errorMessage.scss';

const ErrorMessage = () => {


	return (
		<>
			<img src={imgSrc} alt="error" className='error__img' />
			<div className="error__text">Something went wrong...</div>
		</>
	);
}

export default ErrorMessage;