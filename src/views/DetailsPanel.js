import Button from '@enact/moonstone/Button';
import { Header, Panel } from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import Scroller from '@enact/ui/Scroller/Scroller';

const DetailsPanel = kind({
	name: 'DetailsPanel',

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

	render: ({ sectionID, itemID, onClick, text, ...rest }) => {
		console.log(`DetailsPanel - entrou no render: sectionID=${sectionID}, itemID=${itemID}`);
		console.log(rest);
		return (
			<Panel {...rest}>
				<Header type="compact" title={`Details of ${text}: ${itemID}`} />
				<div>
					<Scroller>
						<Button onClick={onClick}>Go to Player</Button>
					</Scroller>
				</div>
			</Panel>
		);
	}
});

export default DetailsPanel;
