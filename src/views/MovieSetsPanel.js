/*
 * File: MovieSetsPanel.js
 * Project: kodi2webos
 * File Created: Tuesday, 7th July 2020 2:26:25 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Tuesday, 7th July 2020 2:26:30 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import React from 'react';
import Scroller from '@enact/moonstone/Scroller';

import { MOVIES_LIST_IN_PROGRESS, MOVIES_LIST_LAST_ADDED, MOVIES_LIST_LAST_VIEWED, MOVIE_SETS_LIST_ALL } from '../utils/global';

import debug from '../utils/debug';
import Grid from '../components/Grid';
import storage from '../utils/storage';
import utils from '../utils/utils';
import css from './FavouritesPanel.module.less';

const logger = debug('views:moviesets');

class MovieSetsPanel extends React.Component {
	constructor(props) {
		logger("entrou construtor");
		super(props);

		//logger(this.props);

		//precisa fazer o bind para o this.state ficar disponivel dentro do método
		this.onFocusItem = this.onFocusItem.bind(this);

		const items = storage.getSync(MOVIE_SETS_LIST_ALL);

		for (let index = 0; index < items.length; index++) {
			utils.objectFixURL(items[index]);
		}
		this.state = { items: items,
			backgroundImage: items[0].art.fanart };
	}

	onFocusItem({ item, ...rest }) {
		logger("chamou onFocusItem");
		//logger(rest);
		this.setState({ backgroundImage: item.art.fanart });
	}

	render() {
		logger("entrou render()");

        const { onSelectItem, fontSize, ...rest } = Object.assign({}, this.props);
        //logger(rest);
        
		return (
			<div className={css.main} style={{ 'backgroundImage': `url(${this.state.backgroundImage})`, fontSize:fontSize }}>
				<Scroller direction="vertical" verticalScrollbar="hidden">
					<Grid
                        items={this.state.items}
                        itemPropID='setid'
						onFocusItem={this.onFocusItem}
                        onSelectItem={onSelectItem}
                        {...rest}
                       />
				</Scroller>
			</div>
		);
	}
}

export default MovieSetsPanel;