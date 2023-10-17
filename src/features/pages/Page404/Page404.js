
import imgSrc from '../../../resources/img/404.webp';
import './page404.scss';

const Page404 = () => {
	return (
		<div className="page404">
			<h2 className="page404__title">there's no such page...</h2>
			<img src={imgSrc} alt="404" className="page404__img" />
		</div>
	);
}

export default Page404;