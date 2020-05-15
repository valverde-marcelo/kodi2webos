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
		section: PropTypes.string,
		onSelect: PropTypes.func,
	},

	defaultProps: {

	},

	handlers: {

	},

	computed: {
		// Destructuring:
		// url: (props) => { const index = props.index, size = props.size;

		type: ({ section }) => {
			//console.log('Body - entrou no computed: type');
			if (section === 'Movies') {
				return 'movies';
			} else {
				return 'tv-shows';
			}
		},

		//TODO: remover atributo theme
		theme: ({ section }) => {
			//console.log('Body - entrou no computed: theme');
			if (section === 'Movies') {
				return 'Sun';
			} else {
				return 'Nigth';
			}
		}
	},

	render: ({ theme, type, onSelect}) => {
		console.log("Body - entrou no render");
		//delete rest.section;
		return (
				<List type={type} theme={theme} items={kittens} onSelect={onSelect}/>
		)
	}
});

export default Body;