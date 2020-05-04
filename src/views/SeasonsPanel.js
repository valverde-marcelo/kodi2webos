import Button from '@enact/moonstone/Button';
import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import Scroller from '@enact/ui/Scroller/Scroller';

const SeasonsPanel = kind({
	name: 'SeasonsPanel',

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
				<Header type="compact" title="Seasons"/>
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
