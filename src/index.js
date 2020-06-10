/**
 * Copyright 2020 © Marcelo Richard Valverde. All Rigths Reserved.
 */

import React from 'react';
import {render} from 'react-dom';

import App from './main';

let appElement = <App />;

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	render(
		appElement,
		document.getElementById('root')
	);
}

export default appElement;
