import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
	let preLoadedState = undefined;
	
	if (window.currentUser) {
		preLoadedState = {
			session: { currentUserId: window.currentUser.id	},
			entities: { currentUser: { [window.currentUser.id]: window.currentUser } }
		};
	}
	
	const store = configureStore(preLoadedState);
	window.store = store;
	delete window.currentUser;

	ReactDOM.render(<Root store={store}/>, root);
});