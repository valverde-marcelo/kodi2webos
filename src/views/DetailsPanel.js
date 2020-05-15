import Button from '@enact/moonstone/Button';
import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import Scroller from '@enact/ui/Scroller/Scroller';

const DetailsPanel = kind({
	name: 'DetailsPanel',

	propTypes: {
		next: PropTypes.string,
		onClick: PropTypes.func,
		path: PropTypes.string,
		index: PropTypes.string
	},

	computed: {
		//text: ({next}) => `To ${next} Panel`
	},

	render: ({onClick, ...rest}) => {
		console.log("Details - entrou no render");
		console.log(rest);
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
