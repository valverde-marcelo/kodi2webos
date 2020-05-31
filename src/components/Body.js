import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

// Usar Scroller moonstone para ter acesso à key navigation
import Scroller from '@enact/moonstone/Scroller';

import List from './List';
import css from './Body.module.less';


const kittens = [
	'Garfield',
	'Nermal',
	'Simba',
	'Nala',
	'Tiger',
	'Kitty',
	'aNermal',
	'aSimba',
	'aNala',
	'aTiger',
	'aKitty'
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
		theme: ({ sectionID }) => {
			//console.log('Body - entrou no computed: theme');
			if (sectionID === 0) {
				return 'Sun';
			} else {
				return 'Nigth';
			}
		}
	},

	render: ({ theme, sectionID, selectedItemID, onSelect, ...rest }) => {
		console.log("Body - entrou no render");
		//delete rest.section;
		return (
			<div className={css.body} style={{}}>
				<div className={css.containerDetails}>
					Detais
				</div>
				<div className={css.scrooller}>
					<Scroller direction="vertical" verticalScrollbar="none">
						<div className={css.containerList}>
							<List id={'1'} title="Continuar assitindo como <<USUÁRIO>>" sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelect={onSelect} />
							<List id={'2'} title="Recém adicionados" sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelect={onSelect} />
							<List id={'3'} title="Continuar assitindo como <<USUÁRIO>>" sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelect={onSelect} />
							<List id={'4'} title="Recém adicionados" sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelect={onSelect} />
						</div>
					</Scroller>
				</div>
			</div>
		)
	}
});

export default Body;