import kind from '@enact/core/kind';
import { IconButtonDecorator } from '@enact/moonstone/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import IconButton from '@enact/moonstone/IconButton';
import Group from '@enact/ui/Group';
import { Cell } from '@enact/ui/Layout';

import TvIconBase from '@material-ui/icons/Tv';
import MovieIconBase from '@material-ui/icons/Movie';

const TvIcon = IconButtonDecorator(TvIconBase);
const MovieIcon = IconButtonDecorator(MovieIconBase);

const sections = ['Movies', 'TV Shows'];

const Nav = kind({
	name: 'Nav',

	propTypes: {
		onChangeSection: PropTypes.func.isRequired
	},

	render: ({ onChangeSection, ...rest }) => {
		console.log('Nav - entrou no render');
		return (
			<div>
				<Group
					childComponent={TvIcon}
					selectedProp="selected"
					onSelect={onChangeSection}
					select="radio"
					{...rest}
				>
					{sections}
				</Group>

				<Cell><TvIcon fontSize="large">TV Shows</TvIcon></Cell>
				<Cell><MovieIcon fontSize="large">Movies</MovieIcon></Cell>

			</div>
		);
	}
});

export default Nav;

/**
 * <Group
childComponent={IconButton}
selectedProp="selected"
onSelect={onChangeSection}
select="radio"
{...rest}
>
{sections}
</Group>
 */
