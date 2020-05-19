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
		console.log(`EpisodesPanel - entrou no render: sectionID=${sectionID}, itemID=${itemID}`);
		return (
			<Panel {...rest}>
				<Header type="compact" title={`Episodes of ${text}: ${itemID}`} />
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
