/*
 * File: EpisodesPanel.js
 * Project: kodi2webos
 * File Created: Sunday, 3rd May 2020 11:02:18 am
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:23:20 pm
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

const EpisodesPanel = kind({
	name: 'EpisodesPanel',

	propTypes: {
		sectionId: PropTypes.number,
		item: PropTypes.object,
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

	render: ({ sectionID, item, onClick, text, ...rest }) => {
		console.log(`EpisodesPanel - entrou no render: sectionID=${sectionID}, itemID=${item}`);
		return (
			<Panel {...rest}>
				<Header type="compact" title={`Episodes of ${text}: ${item}`} />
				<div>
					<Scroller>
						<Button onClick={onClick}>Go to Details</Button>
					</Scroller>
				</div>
			</Panel>
		);
	}
});

export default EpisodesPanel;
