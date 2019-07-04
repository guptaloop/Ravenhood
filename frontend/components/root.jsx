import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
// Provider avoids 'prop-threading' and makes store available to all components
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => (
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>
);

export default Root;