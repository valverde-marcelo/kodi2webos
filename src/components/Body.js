import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

// Usar Scroller moonstone para ter acesso à key navigation
import Scroller from '@enact/moonstone/Scroller';

import List from './List';
import Details from './Details';
import css from './Body.module.less';
import { Column, Row, Cell } from '@enact/ui/Layout';

import image from '../../assets/images/bttf.jpg';

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

const item = {
	imageBg: image,
	title: 'De volta para o futuro III',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim quis quam congue, non fringilla orci placerat. Praesent sollicitudin',

}

class Body extends React.Component {
	static propTypes = {
		sectionID: PropTypes.number,
		selectedItemID: PropTypes.string,
		onSelectItem: PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.state = {
			itemImageBG: item.imageBg,
			itemTitle: item.title,
			itemDescription: item.description
		};

		console.log("Body - entrou construtor");
		//console.log(this.props);
		//console.log(this.state.item.description);
	}

	static defaultProps = {
		//theme: "sun",
	};

	_theme = () => {
		console.log('Body - chamou o metodo: _theme()');
		if (this.props.sectionID === 0) {
			return 'Sun';
		} else {
			return 'Nigth';
		}
	}

	handleOnFocusItem = ({ sectionID, listID, itemID }) => {
		console.log("Body - chamou o handleOnFocusItem: ");
		this.setState({ itemTitle: `${sectionID}, ${listID}, ${itemID}` });
	}

	render() {
		console.log("Body - entrou render()");
		//clona o objeto
		const { sectionID, selectedItemID, onSelectItem, ...rest } = Object.assign({}, this.props);
		console.log(this.props);
		console.log(this.state);

		const theme = this._theme();

		const itemDetails = { imageBg: this.state.itemImageBG, title: this.state.itemTitle, description: this.state.itemDescription };

		return (
			<Column className={css.body} style={{}}>
				<Cell className={css.containerDetails}>
					<Details item={itemDetails} />
				</Cell>
				<Cell className={css.containerVerticalScrooller}>
					<Scroller direction="vertical" verticalScrollbar="hidden">
						<Cell className={css.containerList}>
							<List listID={'1'} title="Popular on Kodi2WebOS" sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelectItem={onSelectItem} onFocusItem={this.handleOnFocusItem} />
							<List listID={'2'} title="Trending Now" sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelectItem={onSelectItem} onFocusItem={this.handleOnFocusItem} />
							<List listID={'3'} title="Continuar assitindo como <<USUÁRIO>>" sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelectItem={onSelectItem} onFocusItem={this.handleOnFocusItem} />
							<List listID={'4'} title="Recém adicionados" sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelectItem={onSelectItem} onFocusItem={this.handleOnFocusItem} />
						</Cell>
					</Scroller>
				</Cell>
			</Column>
		);
	}
}

/**
const Body = kind({

	name: 'Body',

	propTypes: {
		sectionID: PropTypes.number,
		selectedItemID: PropTypes.string,
		onSelectItem: PropTypes.func,
	},

	defaultProps: {

	},

	handlers: {

		_onFocusItem: ({ itemID }, { onNavigate }) => {
			console.log(`Exec onFocus item: ${itemID}`);
			item.title = itemID;
		},

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

	render: ({ theme, sectionID, selectedItemID, onSelectItem, _onFocusItem, ...rest }) => {
		console.log("Body - entrou no render");
		//delete rest.section;
		return (
			<Column className={css.body} style={{}}>
				<Cell className={css.containerDetails}>
					<Details item={item} />
				</Cell>
				<Cell className={css.containerVerticalScrooller}>
					<Scroller direction="vertical" verticalScrollbar="hidden">
						<Cell className={css.containerList}>
							<List listID={'1'} title="Popular on Kodi2WebOS" sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelectItem={onSelectItem} onFocusItem={_onFocusItem} />
							<List listID={'2'} title="Trending Now" sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelectItem={onSelectItem} onFocusItem={_onFocusItem} />
							<List listID={'3'} title="Continuar assitindo como <<USUÁRIO>>" sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelectItem={onSelectItem} onFocusItem={_onFocusItem} />
							<List listID={'4'} title="Recém adicionados" sectionID={sectionID} selectedItemID={selectedItemID} theme={theme} items={kittens} onSelectItem={onSelectItem} onFocusItem={_onFocusItem} />
						</Cell>
					</Scroller>
				</Cell>
			</Column>
		)
	}
});
*/

export default Body;