import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import { Panels, Routable, Route } from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';
import { SlideLeftArranger } from '@enact/ui/ViewManager';

import AppStateDecorator from './AppStateDecorator';

import MainPanel from '../views/MainPanel';
import DetailsPanel from '../views/DetailsPanel';
import PlayerPanel from '../views/PlayerPanel';
import SeasonsPanel from '../views/SeasonsPanel';
import EpisodesPanel from '../views/EpisodesPanel';

const RoutablePanels = Routable({ navigate: 'onBack' }, Panels);

/**
 * Rotas:
 * 1) Main - Movies -> 2) Details -> 3) Player -> 1) Main
 * 1) Main - TV-Shows -> 4) Seasons -> 5) Episodes -> 6) Details -> 7) Player -> 1) Main
 */

const App = kind({
	name: 'App',

	propTypes: {
		onNavigate: PropTypes.func,
		path: PropTypes.string,
		index: PropTypes.string,
		type: PropTypes.string
	},

	handlers: {

		_onSelectItem: ({ index, type }, { onNavigate }) => {
			//TODO: remover - Index deve ser string
			index = '#' + index;

			console.log("App - chamou o _onSelectItem: " + index + " " + type);
			if (type === 'movies') {
				return onNavigate({ path: '/first/second', index, type })
			} else if (type === 'tv-shows') {
				return onNavigate({ path: '/first/fourth', index, type })
			}
		},

		/**
		 * sintaxe original:
		 * _onSixthPanel: (ev, { onNavigate }) => {
		 *	return onNavigate({ path: '/first/fourth/fifth/sixth' })
		 *	},
		 */

		// Método onNavigate recebe um objeto como parâmetro, contendo atributo 'path'

		_onFirstPanel: (ev, args) => {
			console.log(args);
			const { onNavigate } = args;
			return onNavigate({ path: '/first' })
		},

		/*
		_onSecondPanel: (index, args) => {
			console.log(index);
			const { onNavigate } = args;
			return onNavigate({ path: '/first/second', index })
		},
		*/

		_onThirdPanel: (ev, args) => {
			console.log(args);
			const { onNavigate } = args;
			return onNavigate({ path: '/first/second/third' })
		},

		/*
		_onFourthPanel: (ev, args) => {
			console.log(ev);
			const { onNavigate } = args;
			return onNavigate({ path: '/first/fourth' })
		},
		*/

		_onFifthPanel: (ev, { onNavigate }) => {
			return onNavigate({ path: '/first/fourth/fifth' })
		},

		_onSixthPanel: (ev, { onNavigate }) => {
			return onNavigate({ path: '/first/fourth/fifth/sixth' })
		},

		_onSeventhPanel: (ev, { onNavigate }) => {
			return onNavigate({ path: '/first/fourth/fifth/sixth/seventh' })
		},
	},

	render: ({ _onSelectItem, _onFirstPanel, _onSecondPanel, _onThirdPanel, _onFourthPanel, _onFifthPanel, _onSixthPanel, _onSeventhPanel, onNavigate, path, index, ...rest }) => {
		console.log(rest);
		return (
			<RoutablePanels {...rest} arranger={SlideLeftArranger} onBack={onNavigate} path={path} noCloseButton>
				<Route path="first" component={MainPanel} onSelectItem={_onSelectItem} >
					<Route path="second" index={index} component={DetailsPanel} next="third" onClick={_onThirdPanel}>
						<Route path="third" component={PlayerPanel} next="first" onClick={_onFirstPanel} />
					</Route>
					<Route path="fourth" component={SeasonsPanel} next="fifth" onClick={_onFifthPanel}>
						<Route path="fifth" component={EpisodesPanel} next="sixth" onClick={_onSixthPanel}>
							<Route path="sixth" component={DetailsPanel} next="seventh" onClick={_onSeventhPanel}>
								<Route path="seventh" component={PlayerPanel} next="first" onClick={_onFirstPanel} />
							</Route>
						</Route>
					</Route>
				</Route>
				<Route path="admin" component={"a"} />
				<Route path="help" component={"b"} />
			</RoutablePanels>
		);
	}
});

export default MoonstoneDecorator(
	AppStateDecorator(
		App
	)
);