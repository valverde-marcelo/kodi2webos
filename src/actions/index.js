/*
 * File: index.js
 * Project: kodi2webos
 * File Created: Saturday, 2nd May 2020 10:08:34 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:30:16 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import debug from '../utils/debug';
const logger = debug('actions:index');

export const navigate = (path, sectionID, itemID, item, back) => {
	logger(`executou actions NAVIGATE: path=${path}, sectionID=${sectionID}, itemID=${itemID}`);
	return {
		type: 'NAVIGATE',
		path,
		sectionID,
		itemID,
		item,
		back,
	};
};

export const changeSection = (path, sectionID, itemID, item) => {
	logger(`executou actions CHANGE_SECTION: path=${path}, sectionID=${sectionID}, itemID=${itemID}`);
	return {
		type: 'CHANGE_SECTION',
		path,
		sectionID,
		itemID,
		item,
	};
};
