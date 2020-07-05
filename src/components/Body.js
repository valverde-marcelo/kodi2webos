/*
 * File: Body.js
 * Project: kodi2webos
 * File Created: Friday, 8th May 2020 7:35:34 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:26:23 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import PropTypes from 'prop-types';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import List from './List';
import Details from './Details';
import css from './Body.module.less';
import { Column, Cell } from '@enact/ui/Layout';

import {
	LABEL_MOVIES_LIST_IN_PROGRESS, LABEL_MOVIES_LIST_LAST_VIEWED, LABEL_MOVIES_LIST_LAST_ADDED,
	MOVIES_LIST_IN_PROGRESS, MOVIES_LIST_LAST_ADDED, MOVIES_LIST_LAST_VIEWED
} from '../utils/global';
import debug from '../utils/debug';

const logger = debug('components:body');

const defaultItem = {
	art: { fanart: "https://http2.mlstatic.com/headband-masculina-cor-cinza-chumbo-bandana-faixa-esportes-D_NQ_NP_829613-MLB31232046286_062019-F.jpg" },
	title: 'De volta para o futuro III',
	tagline: "sasfa",
	plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim quis quam congue, non fringilla orci placerat. Praesent sollicitudin',
}

class Body extends React.Component {
	static propTypes = {
		sectionID: PropTypes.number,
		selectedItemID: PropTypes.string,
		onSelectItem: PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.state = {
			item: defaultItem
		};

		console.log("entrou construtor");
	}

	handleOnFocusItem = ({ item }) => {
		logger("chamou o handleOnFocusItem: ");
		logger(item)
		this.setState({ item: item });
	}

	render() {
		logger("entrou render()");
		//clona o objeto
		const { sectionID, selectedItemID, onSelectItem } = Object.assign({}, this.props);
		//console.log(this.props);
		//console.log(this.state);

		const item = this.state.item;

		return (
			<Column className={css.body} style={{}}>
				<Cell className={css.containerDetails}>
					<Details item={item} />
				</Cell>
				<Cell className={css.containerVerticalScrooller}>
					<Scroller direction="vertical" verticalScrollbar="hidden">
						<Cell className={css.containerList}>
							<List listID={MOVIES_LIST_IN_PROGRESS} title={LABEL_MOVIES_LIST_IN_PROGRESS} sectionID={sectionID} selectedItemID={selectedItemID} onSelectItem={onSelectItem} onFocusItem={this.handleOnFocusItem} />
							<List listID={MOVIES_LIST_LAST_ADDED} title={LABEL_MOVIES_LIST_LAST_ADDED} sectionID={sectionID} selectedItemID={selectedItemID} onSelectItem={onSelectItem} onFocusItem={this.handleOnFocusItem} />
							<List listID={MOVIES_LIST_LAST_VIEWED} title={LABEL_MOVIES_LIST_LAST_VIEWED} sectionID={sectionID} selectedItemID={selectedItemID} onSelectItem={onSelectItem} onFocusItem={this.handleOnFocusItem} />
						</Cell>
					</Scroller>
				</Cell>
			</Column>
		);
	}
}

export default Body;