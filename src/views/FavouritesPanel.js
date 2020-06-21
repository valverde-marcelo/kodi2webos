/*
 * File: FavouritesPanel.js
 * Project: kodi2webos
 * File Created: Friday, 19th June 2020 8:54:12 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Friday, 19th June 2020 8:54:17 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Scroller from '@enact/moonstone/Scroller';
import { Panel, Header } from '@enact/moonstone/Panels';
import Button from '@enact/moonstone/Button';
//import List from './List';
//import Details from './Details';
import css from './FavouritesPanel.module.less';
import { Column, Cell, Row } from '@enact/ui/Layout';

import {
	LABEL_MOVIES_LIST_IN_PROGRESS, LABEL_MOVIES_LIST_LAST_VIEWED, LABEL_MOVIES_LIST_LAST_ADDED,
	MOVIES_LIST_IN_PROGRESS, MOVIES_LIST_LAST_ADDED, MOVIES_LIST_LAST_VIEWED
} from '../utils/global';

import debug from '../utils/debug';
import Item from '@enact/moonstone/Item';
import storage from '../utils/storage';
import utils from '../utils/utils';
import Grid from '../components/Grid';

const logger = debug('views:favourites');

function onFocusItem({ item }){
	logger(item);
}

function onSelectItem({ item }){
	logger(item);
}

function FavouritesPanel({ listID, sectionID, ...rest }) {

	//logger(items);

	return (
		<Panel {...rest}>
			<Scroller id={listID} direction="vertical" verticalScrollbar="hidden">
				<Header type="compact" title={`Favourites`} />
				<Grid listID={MOVIES_LIST_IN_PROGRESS} sectionID={sectionID} onSelectItem={onSelectItem} onFocusItem={onFocusItem}/>
			</Scroller>
		</Panel>
	);

}

export default FavouritesPanel;