import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppHeader from "../AppHeader/AppHeader";
import Characters from "../Characters/Characters";
import SingleCharacterPage from "../pages/SingleCharacterPage/SingleCharacterPage";

function App() {
	return (
		<Router>
			<AppHeader />
			<Routes>
				<Route path="/character" Component={Characters} />
				<Route path="/character/:charID" Component={SingleCharacterPage} />
			</Routes>
		</Router>
	);
}

export default App;
