import Button from '@enact/moonstone/Button';
import Group from '@enact/ui/Group';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

const Nav = kind({
	name: 'Nav',

	propTypes: {
		sections: PropTypes.array.isRequired,
		onChangeSection: PropTypes.func.isRequired
	},

	render: ({ sections, onChangeSection, ...rest }) => {
		console.log('Nav - entrou no render');
		return (
			<Group
				childComponent={Button}
				selectedProp="selected"
				onSelect={onChangeSection}
				select="radio"
				{...rest}
			>
				{sections}
			</Group>
		);
	}
});

export default Nav;
