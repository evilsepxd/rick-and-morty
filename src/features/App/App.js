import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppHeader from "../AppHeader/AppHeader";

import SectionPage from "../pages/SectionPage/SectionPage";
import SingleCharacterPage from "../pages/SingleCharacterPage/SingleCharacterPage";
import SinglePage from "../pages/SinglePage/SinglePage";

import CharactersFilter from '../Filters/CharactersFilter';
import CharactersList from '../CharactersList/CharactersList';
import charactersImgSrc from '../../resources/img/logo.svg';

import LocationsFilter from "../Filters/LocationsFilter";
import LocationsList from "../LocationsList/LocationsList";
import locationsImgSrc from '../../resources/img/rick-and-morty.png';

function App() {
	return (
		<Router>
			<AppHeader />
			<Routes>
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
				<Route path="/episode/:dataID" element={ <SinglePage pageType='episode'/> } />
			</Routes>
		</Router>
	);
}

export default App;
