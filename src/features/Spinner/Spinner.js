import './spinner.scss';

import imgSrc from '../../resources/img/loading-component.svg';

const Spinner = () => {
	return (
		<img src={imgSrc} alt="loading" className='spinner' />
	);
}

export default Spinner;