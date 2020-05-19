import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import List from './List';


//import css from './Body.module.less';


const kittens = [
	'Garfield',
	'Nermal',
	'Simba',
	'Nala',
	'Tiger',
	'Kitty'
];


const Body = kind({

	name: 'Body',

	propTypes: {
		sectionID: PropTypes.number,
		selectedItemID: PropTypes.string,
		onSelect: PropTypes.func,
	},

	defaultProps: {

	},

	handlers: {

	},

	computed: {
		// Destructuring:
		// url: (props) => { const index = props.index, size = props.size;

		//TODO: remover atributo theme
		theme: ({ sectionID}) => {
			//console.log('Body - entrou no computed: theme');
			if (sectionID === 0) {
				return 'Sun';
			} else {
				return 'Nigth';
			}
		}
	},

	render: ({ theme, sectionID, selectedItemID, onSelect}) => {
		console.log("Body - entrou no render");
		//delete rest.section;
		return (
				<List sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelect={onSelect}/>
		)
	}
});

export default Body;