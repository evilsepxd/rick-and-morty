import { useParams, Link } from "react-router-dom";
import { useGetSingleCharacterQuery, useGetMultipleEpisodesInfoQuery } from "../../../api/apiSlice";

import Spinner from "../../Spinner/Spinner";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import GoBackLink from "../../GoBackLink/GoBackLink";

import arrowIconSrc from '../../../resources/icons/chevron_right_24px.svg';
import './singleCharacterPage.scss';

const SingleCharacterPage = () => {
	const { charID } = useParams();

	const {
		data: charData = {},
		isLoading: charIsLoading,
		isError: charIsError
	} = useGetSingleCharacterQuery(charID);

	const { episode, ...info } = charData;

	let episodeIds = [];
	episode?.forEach(elem => episodeIds.push(elem.replace(/\D/g, '')))

	const {
		data: episodeData = {},
		isLoading: episodeIsLoading,
		isError: episodeIsError
	} = useGetMultipleEpisodesInfoQuery(episodeIds, {
		skip: charIsLoading || charIsError
	});

	const renderEpisodes = (data) => {
		const layout = (episode, i) => {
			return (
				<li key={i} className="single-char__item">
					<Link className="single-char__link">
						<h3 className="single-char__item-title">{episode.episode}</h3>
						<div className="single-char__item-descr">{episode.name}</div>
						<div className="single-char__item-date">{episode.date}</div>
						<img src={arrowIconSrc} alt='arrow' className="single-char__link-img" />
					</Link>
				</li>
			)
		};

		if (Array.isArray(data)) {
			return data.map((episode, i) => {
				return layout(episode, i);
			});
		} else {
			return layout(data, 0);
		}
	}

	if (charIsLoading || episodeIsLoading) return <Spinner />;
	if (charIsError || episodeIsError) return <ErrorMessage />;

	return (
		<div className="single-char">
			<div className="container">
				<GoBackLink />
				<img src={info.image} alt={info.name} className="single-char__img" />
				<h1 className="single-char__title">{info.name}</h1>
				<div className="single-char__descr">
					<h2 className="single-char__descr-title">Informations</h2>
					<h2 className="single-char__descr-title">Episodes</h2>
					<ul className="single-char__info">
						<li className="single-char__item">
							<h3 className="single-char__item-title">Gender</h3>
							<div className="single-char__item-descr">{info.gender}</div>
						</li>
						<li className="single-char__item">
							<h3 className="single-char__item-title">Status</h3>
							<div className="single-char__item-descr">{info.status}</div>
						</li>
						<li className="single-char__item">
							<h3 className="single-char__item-title">Specie</h3>
							<div className="single-char__item-descr">{info.species}</div>
						</li>
						<li className="single-char__item">
							<h3 className="single-char__item-title">Origin</h3>
							<div className="single-char__item-descr">{info.origin.name}</div>
						</li>
						<li className="single-char__item">
							<h3 className="single-char__item-title">Type</h3>
							<div className="single-char__item-descr">{info.type ? info.type : 'Unknown'}</div>
						</li>
						<li className="single-char__item">
							<Link to={`/location/${info.location.url.replace(/\D/g, '')}`} className="single-char__link">
								<h3 className="single-char__item-title">Location</h3>
								<div className="single-char__item-descr">{info.location.name}</div>
								<img src={arrowIconSrc} alt='arrow' className="single-char__link-img" />
							</Link>
						</li>
					</ul>
					<ul className="single-char__episodes">
						{ renderEpisodes(episodeData) }
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SingleCharacterPage;