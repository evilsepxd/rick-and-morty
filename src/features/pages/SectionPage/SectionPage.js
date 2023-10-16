import './sectionPage.scss';

const SectionPage = ({ FiltersComponent, ListComponent, imgSrc }) => {
	return (
		<div className="section-page">
			<div className="container">
				<div className="section-page__inner">
					<img src={imgSrc} alt="Rick and Morty" className="section-page__img" />
					<FiltersComponent />
					<ListComponent />
				</div>
			</div>
		</div>
	);
}

export default SectionPage;