/*
 * File: SeasonsPanel.js
 * Project: kodi2webos
 * File Created: Sunday, 3rd May 2020 10:59:57 am
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:24:19 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import Button from '@enact/moonstone/Button';
import { Header, Panel } from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import Scroller from '@enact/ui/Scroller/Scroller';

const SeasonsPanel = kind({
	name: 'SeasonsPanel',

	propTypes: {
		sectionID: PropTypes.number,
		itemID: PropTypes.string,
		onClick: PropTypes.func,
	},

	computed: {
		text: ({ sectionID }) => {
			if (sectionID === 0) {
				return "Movie";
			} else if (sectionID === 1) {
				return "TV Show";
			}
		}
	},

	render: ({ sectionID, itemID, onClick, text, ...rest }) => {
		console.log(`SeasonsPanel - entrou no render: sectionID=${sectionID}, itemID=${itemID}`);
		return (
			<Panel {...rest}>
				<Header type="compact" title={`Seasons of ${text}: ${itemID}`} />
				<div>
					<Scroller>
						<Button onClick={onClick}>Go to Episodes</Button>
					</Scroller>
				</div>
			</Panel>
		);
	}
});

export default SeasonsPanel;
