import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchWatchlist } from './util/stock_api_util';

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
	let preLoadedState = undefined;
	
	if (window.currentUser) {
		preLoadedState = {
			session: { currentUserId: window.currentUser.id	},
			entities: { users: { [window.currentUser.id]: window.currentUser } },
		};
	}
	
	const store = configureStore(preLoadedState);
	window.store = store;
	delete window.currentUser;

	window.fetchWatchlist = fetchWatchlist(1, 2);
	
	ReactDOM.render(<Root store={store}/>, root);
});