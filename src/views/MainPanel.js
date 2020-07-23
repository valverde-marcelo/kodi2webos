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
import { Panel } from '@enact/moonstone/Panels';
import Spottable from '@enact/spotlight/Spottable';

import ri from '@enact/ui/resolution';

import Nav from '../components/Nav';
import List from '../components/List';
import Details from '../components/Details';
import storage from '../utils/storage';
import debug from '../utils/debug';
import css from './MainPanel.module.less';

import {
	LABEL_MOVIES_LIST_IN_PROGRESS, LABEL_MOVIES_LIST_LAST_VIEWED, LABEL_MOVIES_LIST_LAST_ADDED,
	MOVIES_LIST_IN_PROGRESS, MOVIES_LIST_LAST_ADDED, MOVIES_LIST_LAST_VIEWED, MOVIES_LIST_GENRES,
	MOVIES_LIST_BY_GENRE_PREFIX
} from '../utils/global';

const logger = debug('views:main');

const defaultItem = {
	art: { fanart: "https://loremflickr.com/1280/720/universe" },
	title: 'asdfasdfa asdfasd afsdafsf',
	tagline: "sasfa",
	plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim quis quam congue, non fringilla orci placerat. Praesent sollicitudin',
}

class MainPanel extends React.Component {
	constructor(props) {
		logger("entrou construtor");
		super(props);
		logger(props);

		this.state = { item: defaultItem}
	}

	onFocusItem = ({ item }) => {
		logger("chamou o onFocusItem");
		this.setState({ item: item });
	}

	/**
	onFocusSideBar = () => {
		logger("chamou o onFocusSideBar");
		this.setState({ isFocused: true });
	}

	onBlurSideBar = () => {
		logger("chamou o onBlurSideBar");
		this.setState({ isFocused: false });
	}
	*/

	render() {
		logger("entrou render()");
		const url = this.state.item.art.fanart;
		const item = this.state.item;

		const { onChangeSection, onSettingsPanel, sectionID, ...rest} = Object.assign({}, this.props);
		//logger(rest);

		//TODO: precisa passar o sectionID correto (movie/tv-show)
		//TODO: onBlur ou onFocus sidebar

		return (
			<div id="main" className={css.main} style={{ 'backgroundImage': `url(${url})`, fontSize:rest.fontSize }}>

				<div className={css.container} style={{fontSize:rest.fontSize}}>
					<SideBar className={css.sidebar}>
						<Nav onChangeSection={onChangeSection} onSettingsPanel={onSettingsPanel} defaultSelected={sectionID}/>
					</SideBar>
					<div id="container-top" className={css.containerTop}>
						<div><ContainerTop item={item}/></div>
					</div>
					<div id="container-bottom" className={css.containerBottom}>
						<ContainerBottom onFocusItem={this.onFocusItem} sectionID={sectionID} {...rest} />
					</div>
				</div>


			</div>
		);
	}
}

export default MainPanel;


function SideBar({ children, ...rest }) {
	return (<div {...rest}>{children}</div>);
}

//const SideBar = Spottable(SideBarBase);

//se a barra lateral sobrepor a lista horizontal, perde a navegação na extrema direita
//style={{height: '60%', left: '-7%', width: '103vw'}
//funciona somente se estiver alinhado
//style={{height: '60%'}

/*
<Row className={css.main} style={{ 'backgroundImage': `url(${url})` }}>
	<Cell className={css.sidebar} shrink onFocus={this.onFocusSideBar} onBlur={this.onBlurSideBar} style={{width:width}}>
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
*/

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


function ContainerTop({ item}) {
	logger("entrou ContainerTop");
	//logger(item);
	return (
		<div className={css.content}>
			<Details item={item}/>
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
				<MovieGenreLists {...rest} />
			</Cell>
		</Scroller>
	);
}

function MovieGenreLists({ ...rest }){
	
	let content = null;
	const items = storage.getSync(MOVIES_LIST_GENRES);

	if (items && items.length > 0) {

        content = items.map((item) => {
				let index = MOVIES_LIST_BY_GENRE_PREFIX + item.genreid;
                return (<List key={item.genreid} listID={index} title={item.label} {...rest} />)
            }
        );
    }


	return (content);

}