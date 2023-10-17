import { Routes, Route, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { lazy, Suspense } from "react";

import AppHeader from "../AppHeader/AppHeader";
import Spinner from "../Spinner/Spinner";

import charactersImgSrc from '../../resources/img/logo.svg';
import locationsImgSrc from '../../resources/img/rick-and-morty.png';
import episodesImgSrc from '../../resources/img/rick-and-morty2.png';

const Page404 = lazy(() => import("../pages/Page404/Page404"));

const SectionPage = lazy(() => import("../pages/SectionPage/SectionPage"));
const SingleCharacterPage = lazy(() => import("../pages/SingleCharacterPage/SingleCharacterPage"));
const SinglePage = lazy(() => import("../pages/SinglePage/SinglePage"));

const CharactersFilter = lazy(() => import('../Filters/CharactersFilter'));
const CharactersList = lazy(() => import('../Lists/CharactersList/CharactersList'));

const LocationsFilter = lazy(() => import("../Filters/LocationsFilter"));
const LocationsList = lazy(() => import("../Lists/LocationsList/LocationsList"));

const EpisodesFilter = lazy(() => import("../Filters/EpisodesFilter"));
const EpisodesList = lazy(() => import("../Lists/EpisodesList/EpisodesList"));

function App() {
	const location = useLocation();

	return (
		<>
			<AppHeader />
			<Suspense fallback={<Spinner/>} >
				<SwitchTransition>
					<CSSTransition
						key={location.key}
						classNames='page'
						timeout={200}
						unmountOnExit
						in={true}
						appear={true}
					>
						<Routes location={location} >
							<Route path="/character" 
								element={
										<SectionPage
											FiltersComponent={CharactersFilter}
											ListComponent={CharactersList}
											imgSrc={charactersImgSrc}
										/>
									}
								/>
							<Route path="/character/:charID" element={ <SingleCharacterPage/> } />
							<Route path="/location" 
								element={
										<SectionPage
											FiltersComponent={LocationsFilter}
											ListComponent={LocationsList}
											imgSrc={locationsImgSrc}
										/>
									}
								/>
							<Route path="/location/:dataID" element={ <SinglePage pageType='location'/> } />
							<Route path="/episode" 
								element={
										<SectionPage
											FiltersComponent={EpisodesFilter}
											ListComponent={EpisodesList}
											imgSrc={episodesImgSrc}
										/>
									}
								/>
							<Route path="/episode/:dataID" element={ <SinglePage pageType='episode'/> } />
							<Route path="*" element={ <Page404/> } />
						</Routes>
					</CSSTransition>
				</SwitchTransition>
			</Suspense>
		</>
	);
}

export default App;
