import Button from '@enact/moonstone/Button';
import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import Scroller from '@enact/ui/Scroller/Scroller';

const PlayerPanel = kind({
	name: 'PlayerPanel',

	propTypes: {
		sectionID: PropTypes.number,
		itemID: PropTypes.string,
		onClick: PropTypes.func,	
	},

	computed: {
		text: ({sectionID}) => {
			if (sectionID === 0) {
				return "Movie";
			} else if (sectionID === 1) {
				return "TV Show";
			}
		}
	},

	render: ({sectionID, itemID, onClick, text, ...rest}) => {
		console.log(`PlayerPanel - entrou no render: sectionID=${sectionID}, itemID=${itemID}`);
		return (
			<Panel {...rest}>
				<Header type="compact" title={`Player of ${text}: ${itemID}`}/>
				<div>
					<Scroller>
						<Button onClick={onClick}>Go to Home</Button>
					</Scroller>
				</div>
			</Panel>
		);
	}
});

export default PlayerPanel;
