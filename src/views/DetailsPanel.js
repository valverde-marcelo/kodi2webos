import Button from '@enact/moonstone/Button';
import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import Scroller from '@enact/ui/Scroller/Scroller';

const DetailsPanel = kind({
	name: 'DetaisPanel',

	propTypes: {
		next: PropTypes.string,
		onClick: PropTypes.func,
		indice:PropTypes.number
		//title: PropTypes.string
	},

	computed: {
		//text: ({next}) => `To ${next} Panel`
	},

	render: ({onClick, indice, ...rest}) => {
		console.log(indice);
		
		delete rest.next;
		return (
			<Panel {...rest}>
				<Header type="compact" title="Details"/>
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
