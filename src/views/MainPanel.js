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
import { IconButtonDecorator } from '@enact/moonstone/IconButton';
import IconButton from '@enact/moonstone/IconButton';
import Scroller from '@enact/moonstone/Scroller';

import SettingsIconBase from '@material-ui/icons/Settings';

import Nav from '../components/Nav';
import Body from '../components/Body';
import List from '../components/List';
import Details from '../components/Details';

import {
	LABEL_MOVIES_LIST_IN_PROGRESS, LABEL_MOVIES_LIST_LAST_VIEWED, LABEL_MOVIES_LIST_LAST_ADDED,
	MOVIES_LIST_IN_PROGRESS, MOVIES_LIST_LAST_ADDED, MOVIES_LIST_LAST_VIEWED
} from '../utils/global';

const SettingsIcon = IconButtonDecorator(SettingsIconBase);

import debug from '../utils/debug';

const logger = debug('views:main');

import css from './MainPanel.module.less';

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
						<Cell className={css.containerTop}>
							<ContainerTop item={item} />
						</Cell>
						<Cell className={css.containerBottom}>
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



/*

const MainPanel = kind({

	name: 'MainPanel',

	propTypes: {
		sectionID: PropTypes.number,
		itemID: PropTypes.string,
		item: PropTypes.object,
		onSelectItem: PropTypes.func,
		onChangeSection: PropTypes.func,
		onSettingsPanel: PropTypes.func,
	},

	render: ({ sectionID, itemID, item, onChangeSection, onSelectItem, onSettingsPanel, ...rest }) => {
		console.log(`MainPanel - entrou no render: sectionID=${sectionID}, itemID=${itemID}`);
		//delete rest.section;
		//<Panel {...rest} className="debug layout" style={{}}>
		return (
			<Panel {...rest}>
				<Row className={css.main}>
					<Column className={css.sideBar}>
						<Nav onChangeSection={onChangeSection} defaultSelected={sectionID} />
						<Cell>
							<IconButton backgroundOpacity="translucent" size="small" onClick={onSettingsPanel}>list</IconButton>
						</Cell>
					</Column>
					<Cell className={css.content}>
						<Body sectionID={sectionID}  onSelectItem={onSelectItem} />
					</Cell>
				</Row>
			</Panel>
		)
	}
});

*/



/**
 * TODO: resolver implementacao do selectedItemID
 *
 *<Body sectionID={sectionID} selectedItemID={itemID} onSelectItem={onSelectItem} />
 *
 *
 */


/**
class MainPanel extends React.Component {
	static propTypes = {
		//next: PropTypes.string, NÃO RECEBE O NEXT. PODE VARIAR CONFORME A ROTA
		onSelectItem: PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.state = { section: sections[0] };
		console.log("construtor MainPanel");
		//console.log(this.props);
	}

	static defaultProps = {

	};

	//https://pt-br.reactjs.org/docs/faq-state.html
	//console.log(this.state); setState é assincrono! não vai refletir a mudança imediatamente!!

	handleSectionChange = ({ data: section }) => {
		console.log("MainPanel - chamou o handleSectionChange: " + section);
		this.setState({ section: section });
	}

	render() {
		//clona o objeto
		const rest = Object.assign({}, this.props);
		const onSelectItem = rest.onSelectItem;

		const selectedSection = this.state.section;
		const onChange = this.handleSectionChange;

		console.log("MainPanel - entrou no render: " + selectedSection);

		return (
			<div className={css.mainView}>
				<Panel>
					<Header type="compact" title="Kodi2WebOS">
						<Nav sections={sections} onSectionChange={onChange} defaultSelected={0} />
					</Header>
					<Body section={selectedSection} onSelect={onSelectItem} />
				</Panel>
			</div>
		);
	}
}
 */