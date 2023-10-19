import { useParams } from 'react-router-dom';
import { useGetMultipleCharactersInfoQuery, useGetSingleInfoQuery } from '../../../api/apiSlice';

import GoBackLink from '../../GoBackLink/GoBackLink';
import CharactersItem from '../../ListItems/CharactersItem/CharactersItem';
import Spinner from '../../Spinner/Spinner';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

import './singlePage.scss';

const SinglePage = ({ pageType }) => {

	const { dataID } = useParams();
	const {
		data = [],
		isLoading,
		isError
	} = useGetSingleInfoQuery({ dataID, pageType });
	const { name, firstTitle, secondTitle, characters } = data;

	const charactersIDs = characters?.map(item => item.replace(/\D/g, ''));

	const {
		data: charactersData = [],
		isCharactersLoading,
		isCharactersError
	} = useGetMultipleCharactersInfoQuery(charactersIDs);

	const renderCharacters = (chars) => {
		if (Array.isArray(chars)) {
			return chars.map(char => {
				return <CharactersItem
						name={char.name}
						image={char.image}
						species={char.species}
						id={char.id}
						key={char.id}
						/>;
			});
		} else {
			return <CharactersItem
					name={chars.name}
					image={chars.image}
					species={chars.species}
					id={chars.id}
					key={chars.id}
					/>;
		}
		
	}

	if (isLoading || isCharactersLoading) return <Spinner />;
	if (isError || isCharactersError) return <ErrorMessage />;

	const legend = {
		titleFirst: 'Type',
		titleSecond: 'Dimension',
		listName: 'Residents'
	}

	if (pageType === 'episode') {
		legend.titleFirst = 'Episode';
		legend.titleSecond = 'Date';
		legend.listName = 'Cast';
	}

	const elements = renderCharacters(charactersData);
	return (
		<div className="single-page">
			<div className="container">
				<GoBackLink />
				<div className="single-page__title">{ name }</div>
				<div className="single-page__info">
					<div className="single-page__info-item">
						<div className="single-page__info-title">{ legend.titleFirst }</div>
						<div className="single-page__info-subtitle">{ firstTitle }</div>
					</div>
					<div className="single-page__info-item">
						<div className="single-page__info-title">{ legend.titleSecond }</div>
						<div className="single-page__info-subtitle">{ secondTitle }</div>
					</div>
				</div>
				<div className="single-page__subtitle">{ legend.listName }</div>
				<div className="single-page__list">
					{ elements }
				</div>
			</div>
		</div>
	);
}

export default SinglePage;