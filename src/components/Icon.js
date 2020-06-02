import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import { IconButtonDecorator } from '@enact/moonstone/IconButton';
import {LabeledIconButtonDecorator} from '@enact/moonstone/LabeledIconButton';

import TvIconBase from '@material-ui/icons/Tv';
import MovieIconBase from '@material-ui/icons/Movie';
import { Cell } from '@enact/ui/Layout';
import IconButton from '@enact/moonstone/IconButton';

const TvIcon = IconButtonDecorator(TvIconBase);
const MovieIcon = IconButtonDecorator(MovieIconBase);

const Icon = kind({
	name: "Icon",

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
				return "default";
			}
			return "small";
		},
	},

	render: ({ fontSize, children, onClick, ...rest }) => {
		console.log(rest);

		let component = "";

		if (children === "Movies") {
			component = <MovieIcon pressed="false" fontSize={fontSize} onClick={onClick}/>;
		} else if (children === "TV Shows") {
			component = <TvIcon pressed="false" fontSize={fontSize} onClick={onClick}/>;
		}

		return (<Cell>{component}</Cell>);
	}
});

export default Icon;

/**
 * <Cell><TvIcon fontSize="small" onClick={onChangeSection}>TV Shows</TvIcon></Cell>
	<Cell><MovieIcon fontSize="small" onClick={onChangeSection}>Movies</MovieIcon></Cell>

	return (<Cell>{component}</Cell>)
 */