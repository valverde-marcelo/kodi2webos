/*
 * File: Nav.js
 * Project: kodi2webos
 * File Created: Friday, 8th May 2020 6:29:26 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:27:50 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import Group from '@enact/ui/Group';

import Icon from './Icon';


const sections = ['Movies', 'TV Shows'];


const Nav = kind({
	name: 'Nav',

	propTypes: {
		onChangeSection: PropTypes.func.isRequired,
		defaultSelected: PropTypes.number,
	},

	render: ({ onChangeSection, defaultSelected }) => {
		console.log('Nav - entrou no render');
		console.log(defaultSelected);

		return (
				<Group
					childComponent={Icon}
					selectedProp="selected"
					onSelect={onChangeSection}
					select="radio"
					itemProps={{ defaultSelected }}
				>
					{sections}
				</Group>
		);
	}
});

export default Nav;

/**
 * <Group
childComponent={IconButton}
selectedProp="selected"
onSelect={onChangeSection}
select="radio"
{...rest}
>
{sections}
</Group>
 */
