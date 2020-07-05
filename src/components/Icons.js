/*
 * File: Icon.js
 * Project: kodi2webos
 * File Created: Monday, 1st June 2020 1:42:25 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:26:55 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
//import { IconButtonDecorator } from '@enact/moonstone/IconButton';
//import TvIconBase from '@material-ui/icons/Tv';
//import MovieIconBase from '@material-ui/icons/Movie';
import { Cell } from '@enact/ui/Layout';
import IconButton from '@enact/moonstone/IconButton';

import cssModule from './Icons.module.less';
import debug from '../utils/debug';
const logger = debug('components:icons');

import { SECTION_MOVIES, SECTION_TV_SHOWS, SECTION_COLLECTIONS, SECTION_FAVOURITES } from '../utils/global';

//const TvIcon = IconButtonDecorator(TvIconBase);
//const MovieIcon = IconButtonDecorator(MovieIconBase);

const css = {
	iconButton: cssModule.default,
	small: cssModule.small,
	large: cssModule.large,
	selected: cssModule.selected
}

const Icons = kind({
	name: "Icons",

	propTypes: {
		children: PropTypes.string,
		onClick: PropTypes.func.isRequired,
		selected: PropTypes.bool,
		defaultSelected: PropTypes.number,
	},

	defaultProps: {
		//pressed: true,
	},

	computed: {
		fontSize: ({ "data-index": index, defaultSelected }) => {
			if (index === defaultSelected) {
				return "large";
			}
			return "small";
		},

		selected: ({ "data-index": index, defaultSelected }) => {
			if (index === defaultSelected) {
				return true;
			}
			return false;
		},
	},

	render: ({ selected, children, onClick }) => {

		logger(children);

		let component = "";

		switch (children) {
			case SECTION_MOVIES:
				component = <IconButton css={css} color="red" backgroundOpacity="translucent" selected={selected} onClick={onClick}>star</IconButton>;
				break;

			case SECTION_TV_SHOWS:
				component = <IconButton css={css} color="yellow" backgroundOpacity="translucent" selected={selected} onClick={onClick}>star</IconButton>;
				break;

			case SECTION_COLLECTIONS:
				component = <IconButton css={css} color="green" backgroundOpacity="translucent" selected={selected} onClick={onClick}>star</IconButton>;

				break;

			case SECTION_FAVOURITES:
				component = <IconButton css={css} color="blue" backgroundOpacity="translucent" selected={selected} onClick={onClick}>star</IconButton>;
				break;

			default:
				break;
		}

		return (<Cell style={{ marginTop: '10px' }}>{component}</Cell>);
	}
});

export default Icons;

/**
 * <Cell><TvIcon fontSize="small" onClick={onChangeSection}>TV Shows</TvIcon></Cell>
	<Cell><MovieIcon fontSize="small" onClick={onChangeSection}>Movies</MovieIcon></Cell>

	return (<Cell>{component}</Cell>)
 */