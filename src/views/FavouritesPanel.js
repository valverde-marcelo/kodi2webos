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
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';
import { Panel, Header } from '@enact/moonstone/Panels';
import Button from '@enact/moonstone/Button';
//import List from './List';
//import Details from './Details';
//import css from './Body.module.less';
//import { Column, Cell } from '@enact/ui/Layout';
//import image from '../../assets/images/bttf.jpg';
//import {
//	LABEL_MOVIES_LIST_IN_PROGRESS, LABEL_MOVIES_LIST_LAST_VIEWED, LABEL_MOVIES_LIST_LAST_ADDED,
//	MOVIES_LIST_IN_PROGRESS, MOVIES_LIST_LAST_ADDED, MOVIES_LIST_LAST_VIEWED
//} from '../utils/global';
import debug from '../utils/debug';

const logger = debug('views:favourites');

const defaultItem = {
	art: { fanart: "https://http2.mlstatic.com/headband-masculina-cor-cinza-chumbo-bandana-faixa-esportes-D_NQ_NP_829613-MLB31232046286_062019-F.jpg" },
	title: 'De volta para o futuro III',
	tagline: "sasfa",
	plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim quis quam congue, non fringilla orci placerat. Praesent sollicitudin',
}

class FavouritesPanel extends React.Component {
	static propTypes = {
		sectionID: PropTypes.number,
	}

	constructor(props) {
		super(props);
        
        //this.state = { item: defaultItem };

		console.log("entrou construtor");
	}

    /*
    handleOnFocusItem = ({ item }) => {
		logger("chamou o handleOnFocusItem: ");
		logger(item)
		this.setState({ item: item });
    }
    */

	render() {
		logger("entrou render()");
		//clona o objeto
		//const { sectionID, ...rest } = Object.assign({}, this.props);
		//console.log(this.props);

		//const item = this.state.item;

		return (
            <Panel>
				<Header type="compact" title={`Favourites`} />
				<div>
					<Scroller>
						<Button>Button</Button>
					</Scroller>
				</div>
			</Panel>
		);
	}
}

export default FavouritesPanel;