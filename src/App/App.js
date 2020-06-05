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

import { GetMovies } from '../api/actions.js';
import css from './App.module.less';

GetMovies();

//Routable Decorator
const RoutablePanels = Routable({ navigate: 'onBack' }, Panels);

/**
 * Rotas:
 * 1) Main - Movies -> 2) Details -> 3) Player -> 1) Main
 * 1) Main - TV-Shows -> 4) Seasons -> 5) Episodes -> 6) Details -> 7) Player -> 1) Main
 */

const App = kind({
	name: 'App',

	propTypes: {
		path: PropTypes.string,
		itemID: PropTypes.string,
		sectionID: PropTypes.number,
	},

	handlers: {

		// Método onNavigate recebe um objeto como parâmetro, contendo atributos: 'path', 'sectionID', 'itemID'

		_onChangeSection: ({ data: section, selected: sectionID }, { onChangeSection }) => {
			console.log("App - chamou o _onChangeSection: " + section + " - " + sectionID);
			return onChangeSection({ path: '/first', sectionID });
		},


		_onSelectItem: ({ sectionID, itemID }, { onNavigate }) => {
			console.log("App - chamou o _onSelectItem: " + itemID + " " + sectionID);
			if (sectionID === 0) {
				return onNavigate({ path: '/first/second', sectionID, itemID })
			} else if (sectionID === 1) {
				return onNavigate({ path: '/first/fourth', sectionID, itemID })
			}
		},

		

		//TODO: fix JSX props should not use arrow functions react/jsx-no-bind
		/*
		_onSelectItem: (ev, args) => {
			console.log("App - chamou o _onSelectItem:");
			console.log(ev);
			console.log(args);
		},
		*/

		/**
		 * sintaxe original:
		 * _onSixthPanel: (ev, { onNavigate }) => {
		 *	return onNavigate({ path: '/first/fourth/fifth/sixth' })
		 *	},
		 */

		_onBack: ({ path }, { onNavigate, itemID, sectionID }) => {
			console.log(`App - chamou o _onBack: path=${path}, sectionID=${sectionID}, itemID=${itemID}`);
			return onNavigate({ path, sectionID, itemID })
		},


		_onFirstPanel: (ev, { onNavigate, itemID, sectionID }) => {
			//console.log("App - chamou o _onFirstPanel");
			return onNavigate({ path: '/first', sectionID, itemID })
		},

		/*
		_onSecondPanel: (index, args) => {
			console.log(index);
			const { onNavigate } = args;
			return onNavigate({ path: '/first/second', index })
		},
		*/

		_onThirdPanel: (ev, { onNavigate, itemID, sectionID }) => {
			//console.log("App - chamou o _onThirdPanel");
			return onNavigate({ path: '/first/second/third', sectionID, itemID })
		},

		/*
		_onFourthPanel: (ev, args) => {
			console.log(ev);
			const { onNavigate } = args;
			return onNavigate({ path: '/first/fourth' })
		},
		*/

		_onFifthPanel: (ev, { onNavigate, itemID, sectionID }) => {
			return onNavigate({ path: '/first/fourth/fifth', sectionID, itemID })
		},

		_onSixthPanel: (ev, { onNavigate, itemID, sectionID }) => {
			return onNavigate({ path: '/first/fourth/fifth/sixth', sectionID, itemID })
		},

		_onSeventhPanel: (ev, { onNavigate, itemID, sectionID }) => {
			return onNavigate({ path: '/first/fourth/fifth/sixth/seventh', sectionID, itemID })
		},
	},

	render: ({ _onChangeSection, _onSelectItem, _onFirstPanel, _onThirdPanel, _onFifthPanel, _onSixthPanel, _onSeventhPanel, _onBack, path, itemID, sectionID, ...rest }) => {
		console.log(`App - entrou no render: path=${path}, sectionID=${sectionID}, itemID=${itemID}`);
		delete rest.onNavigate;
		delete rest.onChangeSection;

		return (
			<RoutablePanels {...rest} arranger={SlideLeftArranger} onBack={_onBack} path={path} noCloseButton>
				<Route path="first" component={MainPanel} sectionID={sectionID} itemID={itemID} next="second" onChangeSection={_onChangeSection} onSelectItem={_onSelectItem}>
					<Route path="second" component={DetailsPanel} sectionID={sectionID} itemID={itemID} next="third" onClick={_onThirdPanel}>
						<Route path="third" component={PlayerPanel} sectionID={sectionID} itemID={itemID} next="first" onClick={_onFirstPanel} />
					</Route>
					<Route path="fourth" component={SeasonsPanel} sectionID={sectionID} itemID={itemID} next="fifth" onClick={_onFifthPanel}>
						<Route path="fifth" component={EpisodesPanel} sectionID={sectionID} itemID={itemID} next="sixth" onClick={_onSixthPanel}>
							<Route path="sixth" component={DetailsPanel} sectionID={sectionID} itemID={itemID} next="seventh" onClick={_onSeventhPanel}>
								<Route path="seventh" component={PlayerPanel} sectionID={sectionID} itemID={itemID} next="first" onClick={_onFirstPanel} />
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