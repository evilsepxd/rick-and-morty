import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppHeader from "../AppHeader/AppHeader";
import Characters from "../Characters/Characters";

function App() {
	return (
		<Router>
			<AppHeader />
			<Routes>
				<Route path="/" Component={Characters} />
			</Routes>
		</Router>
	);
}

export default App;
