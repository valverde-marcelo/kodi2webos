/*
 * File: main.js
 * Project: kodi2webos
 * File Created: Saturday, 2nd May 2020 10:08:33 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:22:18 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

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
