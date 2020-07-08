/*
 * File: MainPanel.js
 * Project: kodi2webos
 * File Created: Saturday, 2nd May 2020 10:08:34 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:23:38 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import React from 'react';
import { Column, Row, Cell } from '@enact/ui/Layout';
import Scroller from '@enact/moonstone/Scroller';
import SlotItem from '@enact/moonstone/SlotItem';
import {Panel} from '@enact/moonstone/Panels';
import Nav from '../components/Nav';
import List from '../components/List';
import Details from '../components/Details';
import debug from '../utils/debug';
import css from './MainPanel.module.less';

import {
	LABEL_MOVIES_LIST_IN_PROGRESS, LABEL_MOVIES_LIST_LAST_VIEWED, LABEL_MOVIES_LIST_LAST_ADDED,
	MOVIES_LIST_IN_PROGRESS, MOVIES_LIST_LAST_ADDED, MOVIES_LIST_LAST_VIEWED
} from '../utils/global';

const logger = debug('views:main');

const defaultItem = {
	art: { fanart: "https://loremflickr.com/1280/720/universe" },
	title: 'De volta para o futuro III',
	tagline: "sasfa",
	plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim quis quam congue, non fringilla orci placerat. Praesent sollicitudin',
}

class MainPanel extends React.Component {
	constructor(props) {
		logger("entrou construtor");
		super(props);
		logger(props);

		this.state = { item: defaultItem }
	}

	onFocusItem = ({ item }) => {
		logger("chamou o onFocusItem");
		this.setState({ item: item });
	}

	onFocusSideBar = () => {
		logger("chamou o onFocusSideBar");
	}

	render() {
		logger("entrou render()");
		const url = this.state.item.art.fanart;
		const item = this.state.item;

		const { onChangeSection, onSettingsPanel, sectionID, ...rest } = Object.assign({}, this.props);
		logger(rest);

		//TODO: precisa passar o sectionID correto (movie/tv-show)
		//TODO: onBlur ou onFocus sidebar

		return (
			<Row className={css.main} style={{ 'backgroundImage': `url(${url})` }}>
				<Cell className={css.sidebar} shrink onFocus={this.onFocusSideBar}>
					<Nav onChangeSection={onChangeSection} onSettingsPanel={onSettingsPanel} defaultSelected={sectionID} />
				</Cell>
				<Cell>
					<Column className={css.containerRight}>
						<Cell className={css.containerTop} size={'40vh'}>
							<div><ContainerTop item={item} /></div>
						</Cell>
						<Cell className={css.containerBottom} size={'60vh'}>
							<ContainerBottom onFocusItem={this.onFocusItem} sectionID={sectionID} {...rest} />
						</Cell>
					</Column>
				</Cell>
			</Row>
		);
	}
}

export default MainPanel;

//se a barra lateral sobrepor a lista horizontal, perde a navegação na extrema direita
//style={{height: '60%', left: '-7%', width: '103vw'}
//funciona somente se estiver alinhado
//style={{height: '60%'}


/*
Layout usando apenas DIV e posições absolutas no CSS

<div id="main" className={css.main} style={{ 'backgroundImage': `url(${url})` }}>
	<div id="sidebar" className={css.sidebar} onFocus={this.onFocusSideBar}>
		<Nav onChangeSection={onChangeSection} onSettingsPanel={onSettingsPanel} defaultSelected={sectionID} />
	</div>
	<div id="container-top" className={css.containertop}>
		<ContainerTop item={item} />
	</div>
	<div id="container-bottom" className={css.containerbottom}>
		<ContainerBottom onFocusItem={this.onFocusItem} {...rest} />
	</div>
</div>

*/


function ContainerTop({ item }) {
	logger("entrou ContainerTop");
	//logger(item);
	return (
		<div className={css.content}>
			<Details item={item} />
		</div>
	);
}

function ContainerBottom({ ...rest }) {
	logger("entrou ContainerBottom");
	logger(rest);
	return (
		<Scroller direction="vertical" verticalScrollbar="hidden">
			<Cell className={css.verticallist} >
				<List listID={MOVIES_LIST_IN_PROGRESS} title={LABEL_MOVIES_LIST_IN_PROGRESS} {...rest} />
				<List listID={MOVIES_LIST_LAST_ADDED} title={LABEL_MOVIES_LIST_LAST_ADDED} {...rest} />
				<List listID={MOVIES_LIST_LAST_VIEWED} title={LABEL_MOVIES_LIST_LAST_VIEWED} {...rest} />
			</Cell>
		</Scroller>
	);
}