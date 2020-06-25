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

import React from 'react';
import Scroller from '@enact/moonstone/Scroller';

import {	MOVIES_LIST_IN_PROGRESS, MOVIES_LIST_LAST_ADDED, MOVIES_LIST_LAST_VIEWED } from '../utils/global';

import debug from '../utils/debug';
import Grid from '../components/Grid';
import storage from '../utils/storage';
import utils from '../utils/utils';
import css from './FavouritesPanel.module.less';

const logger = debug('views:favourites');

class FavouritesPanel extends React.Component {
	constructor(props) {
		logger("entrou construtor");
		super(props);

		logger(props);

		//precisa fazer o bind para o this.state ficar disponivel dentro do método
		this.onFocusItem = this.onFocusItem.bind(this);
		this.onSelectItem = this.onSelectItem.bind(this);

		const itemsA = storage.getSync(MOVIES_LIST_IN_PROGRESS);
		const itemsB = storage.getSync(MOVIES_LIST_LAST_ADDED);
		const itemsC = storage.getSync(MOVIES_LIST_LAST_VIEWED);
		let items = itemsA.concat(itemsB).concat(itemsC);

		//let items = itemsA;
		for (let index = 0; index < items.length; index++) {
			utils.objectFixURL(items[index]);
		}

		this.state = { items: items, 
						backgroundImage: items[0].art.fanart };
	}

	onFocusItem({item, ...rest}) {
		logger("chamou onFocusItem");
		logger(rest);
		this.setState({ backgroundImage: item.art.fanart });
	}

	onSelectItem() {
		logger("chamou onSelectItem");
		logger(this.state);
	}


	render() {
		logger("entrou render()");
		
		//TODO: precisa passar o sectionID correto (movie/tv-show)
		return (
			<section className={css.main} style={{ 'backgroundImage': `url(${this.state.backgroundImage})` }}>
				<Scroller direction="vertical" verticalScrollbar="hidden">
					<Grid
						items={this.state.items}
						onFocusItem={this.onFocusItem}
						onSelectItem={this.onSelectItem} />
				</Scroller>
			</section>
        );
	}
}

export default FavouritesPanel;