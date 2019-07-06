import React from 'react';
import { Provider } from 'react-redux';
// Provider avoids 'prop-threading' and makes store available to all components
import { HashRouter } from 'react-router-dom';
import AppContainer from './app_container';

const Root = ({ store }) => (
	<Provider store={store}>
		<HashRouter>
			<AppContainer />
		</HashRouter>
	</Provider>
);

export default Root;