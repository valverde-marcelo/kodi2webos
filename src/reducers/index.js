/*
 * File: index.js
 * Project: kodi2webos
 * File Created: Saturday, 2nd May 2020 10:08:34 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:26:02 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import { combineReducers } from 'redux';
import debug from '../utils/debug';

const logger = debug('reducers:index');

const init = {
	path: '/first/loading',
	sectionID: 0,
	itemID: "0000",
	item: null
};

function path(state = init, action) {
	logger('executou reducer');
	//console.log(state);
	//console.log(action);
	switch (action.type) {
		case 'NAVIGATE':
			return {
				path: action.path,
				sectionID: action.sectionID,
				itemID: action.itemID,
				item: action.item
			};

		case 'CHANGE_SECTION':
			return {
				path: action.path,
				sectionID: action.sectionID
			};

		default:
			return state;
	}
}

const rootReducer = combineReducers({
	path
});

export default rootReducer;
