import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './features/App/App';
import { BrowserRouter as Router } from 'react-router-dom';

import './style/style.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
	<Provider store={store}>
		<Router basename='/rick-and-morty'>
			<App />
		</Router>
	</Provider>
  </React.StrictMode>
);