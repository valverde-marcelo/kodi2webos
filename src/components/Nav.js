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
import { Cell } from '@enact/ui/Layout';
import IconButton from '@enact/moonstone/IconButton';
import Icons from './Icons';
import { SECTIONS } from '../utils/global';
import css from './Nav.module.less';
import debug from '../utils/debug';

const logger = debug('components:nav');

function Nav({ onChangeSection, onSettingsPanel, defaultSelected }) {

	logger('entrou no render');

	return (<div className={css.main}>
				<Group
					childComponent={Icons}
					selectedProp="selected"
					onSelect={onChangeSection}
					select="radio"
					itemProps={{ defaultSelected }}
				>
					{SECTIONS}
				</Group>
				<Cell style={{marginTop: '10px'}}>
					<IconButton backgroundOpacity="translucent" size="small" onClick={onSettingsPanel}>list</IconButton>
				</Cell>
			</div>
	);

}
export default Nav;