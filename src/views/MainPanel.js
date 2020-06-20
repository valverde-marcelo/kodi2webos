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

import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import { Header, Panel } from '@enact/moonstone/Panels';
import { Column, Row, Cell } from '@enact/ui/Layout';
import { IconButtonDecorator } from '@enact/moonstone/IconButton';
import IconButton from '@enact/moonstone/IconButton';
import SettingsIconBase from '@material-ui/icons/Settings';

import Nav from '../components/Nav';
import Body from '../components/Body';

const SettingsIcon = IconButtonDecorator(SettingsIconBase);

import css from './MainPanel.module.less';

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

export default MainPanel;

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