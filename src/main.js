import {Provider} from 'react-redux';
import React from 'react';

import App from './App';
import configureStore from './store';

// set default launch path
const store = configureStore();

let appElement = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default appElement;
