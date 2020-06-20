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

import React from 'react';
import Group from '@enact/ui/Group';
import { Column, Cell } from '@enact/ui/Layout';
import Icons from './Icons';
import { SECTIONS } from '../utils/global';
import debug from '../utils/debug';

const logger = debug('components:nav');

function Nav({ onChangeSection, defaultSelected }) {

	logger('entrou no render');

	return (
			<Group
				childComponent={Icons}
				selectedProp="selected"
				onSelect={onChangeSection}
				select="radio"
				itemProps={{ defaultSelected }}
			>
				{SECTIONS}
			</Group>
	);

}
export default Nav;