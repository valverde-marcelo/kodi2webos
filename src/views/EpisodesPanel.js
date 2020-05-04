import Button from '@enact/moonstone/Button';
import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import Scroller from '@enact/ui/Scroller/Scroller';

const EpisodesPanel = kind({
	name: 'EpisodesPanel',

	propTypes: {
		next: PropTypes.string,
		onClick: PropTypes.func,
		//title: PropTypes.string
	},

	computed: {
		//text: ({next}) => `To ${next} Panel`
	},

	render: ({onClick, ...rest}) => {
		delete rest.next;
		return (
			<Panel {...rest}>
				<Header type="compact" title="Episodes"/>
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
