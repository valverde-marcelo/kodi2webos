/*
 * File: App.js
 * Project: App
 * File Created: Saturday, 2nd May 2020 10:08:34 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:28:31 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import { Panels, Routable, Route } from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';
import { SlideLeftArranger } from '@enact/ui/ViewManager';

import AppStateDecorator from './AppStateDecorator';

import LoadingPanel from '../views/LoadingPanel';
import MainPanel from '../views/MainPanel';
import DetailsPanel from '../views/DetailsPanel';
import PlayerPanel from '../views/PlayerPanel';
import SeasonsPanel from '../views/SeasonsPanel';
import EpisodesPanel from '../views/EpisodesPanel';
import SettingsPanel from '../views/SettingsPanel';
import FavouritesPanel from '../views/FavouritesPanel';

import { SECTION_FAVOURITES } from '../utils/global';

import ri from '@enact/ui/resolution';

import debug from '../utils/debug';

const logger = debug('App:App');

//import css from './App.module.less';


//Routable Decorator
const RoutablePanels = Routable({ navigate: 'onBack' }, Panels);

/**
 * Rotas:
 * 1) Main - Movies -> 2) Details -> 3) Player -> 1) Main
 * 1) Main - TV-Shows -> 4) Seasons -> 5) Episodes -> 6) Details -> 7) Player -> 1) Main
 */

//TODO: colocar loadingPanel como primeiro nivel... todos voltam para ele

const App = kind({
	name: 'App',

	propTypes: {
		path: PropTypes.string,
		item: PropTypes.object,
		sectionID: PropTypes.number,
	},

	handlers: {

		// Método onNavigate recebe um objeto como parâmetro, contendo atributos: 'path', 'sectionID', 'itemID'

		_onChangeSection: ({ data: section, selected: sectionID }, { onNavigate, onChangeSection }) => {
			console.log("App - chamou o _onChangeSection: " + section + " - " + sectionID);
			switch (section) {
				case SECTION_FAVOURITES:
					return onNavigate({ path: '/loading/first/favourites', sectionID });


				default:
					return onChangeSection({ path: '/loading/first', sectionID });
			}
		},


		//TODO: fix JSX props should not use arrow functions react/jsx-no-bind
		_onSelectItem: ({ sectionID, itemID, item }, { onNavigate }) => {
			logger("chamou o _onSelectItem: " + itemID + " " + sectionID);
			if (sectionID === 0) {
				return onNavigate({ path: '/loading/first/second', sectionID, itemID, item })
			} else if (sectionID === 1) {
				return onNavigate({ path: '/loading/first/fourth', sectionID, itemID, item })
			}
		},

		/**
		 * sintaxe original:
		 * _onSixthPanel: (ev, { onNavigate }) => {
		 *	return onNavigate({ path: '/first/fourth/fifth/sixth' })
		 *	},
		 */

		_onBack: ({ path }, { onNavigate, itemID, item, sectionID }) => {
			console.log(`App - chamou o _onBack: path=${path}, sectionID=${sectionID}, itemID=${itemID}`);
			return onNavigate({ path, sectionID, itemID, item })
		},

		_onLoadingPanel: (ev, { onNavigate, itemID, item, sectionID }) => {
			logger("chamou o _onLoadingPanel");
			return onNavigate({ path: '/loading', sectionID, itemID, item })
		},

		_onSettingsPanel: (ev, { onNavigate, itemID, item, sectionID }) => {
			logger("chamou _onSettingsPanel")
			return onNavigate({ path: '/loading/settings', sectionID, itemID, item })
		},

		_onFavouritesPanel: (ev, { onNavigate, sectionID }) => {
			logger("chamou _onFavouritesPanel")
			return onNavigate({ path: '/loading/first/favourites', sectionID })
		},

		_onFirstPanel: (ev, { onNavigate, item, sectionID }) => {
			//console.log("App - chamou o _onFirstPanel");
			return onNavigate({ path: '/loading/first', sectionID, item })
		},

		/*
		_onSecondPanel: (index, args) => {
			console.log(index);
			const { onNavigate } = args;
			return onNavigate({ path: '/first/second', index })
		},
		*/

		_onThirdPanel: (ev, { onNavigate, itemID, item, sectionID }) => {
			//console.log("App - chamou o _onThirdPanel");
			return onNavigate({ path: '/loading/first/second/third', sectionID, itemID, item })
		},

		/*
		_onFourthPanel: (ev, args) => {
			console.log(ev);
			const { onNavigate } = args;
			return onNavigate({ path: '/first/fourth' })
		},
		*/

		_onFifthPanel: (ev, { onNavigate, itemID, item, sectionID }) => {
			return onNavigate({ path: '/loading/first/fourth/fifth', sectionID, itemID, item })
		},

		_onSixthPanel: (ev, { onNavigate, itemID, item, sectionID }) => {
			return onNavigate({ path: '/loading/first/fourth/fifth/sixth', sectionID, itemID, item })
		},

		_onSeventhPanel: (ev, { onNavigate, itemID, item, sectionID }) => {
			return onNavigate({ path: '/loading/first/fourth/fifth/sixth/seventh', sectionID, itemID, item })
		},

	},

	render: ({ _onChangeSection, _onSelectItem, _onFirstPanel, _onThirdPanel, _onFifthPanel, _onSixthPanel, _onSeventhPanel, _onSettingsPanel, _onBack, path, itemID, item, sectionID, ...rest }) => {
		logger(`entrou no render: path=${path}, sectionID=${sectionID}, itemID=${item}`);

		delete rest.onInitConfig;
		delete rest.onNavigate;
		delete rest.onChangeSection;

		ri.config.orientationHandling = 'scale';
		ri.init();

		logger(ri);

		const fontSize = ri.calculateFontSize();
		//const fontSize = '24px';
		logger(fontSize);

		/*
		const ratio = ri.getAspectRatio();
		logger(ratio);

		const ratioName = ri.getAspectRatioName();
		logger(ratioName);

		const resClasses = ri.getResolutionClasses();
		logger(resClasses);

		const screenType = ri.getScreenType();
		logger(screenType);

		logger(ri.scale(100));

		logger(ri.scaleToRem(100));

		logger(ri.unitToPixelFactors);
		*/


		return (
			<RoutablePanels {...rest} style={{fontSize: fontSize}} arranger={SlideLeftArranger} onBack={_onBack} path={path} noCloseButton>
				<Route path="loading" component={LoadingPanel} next="first" onFirstPanel={_onFirstPanel} onSettingsPanel={_onSettingsPanel}>
					<Route path="first" component={MainPanel} sectionID={sectionID} itemID={itemID} item={item} next="second" onChangeSection={_onChangeSection} onSelectItem={_onSelectItem} onSettingsPanel={_onSettingsPanel}>
						<Route path="second" component={DetailsPanel} sectionID={sectionID} itemID={itemID} item={item} next="third" onClick={_onThirdPanel}>
							<Route path="third" component={PlayerPanel} sectionID={sectionID} itemID={itemID} item={item} next="first" onClick={_onFirstPanel} />
						</Route>
						<Route path="fourth" component={SeasonsPanel} sectionID={sectionID} itemID={itemID} item={item} next="fifth" onClick={_onFifthPanel}>
							<Route path="fifth" component={EpisodesPanel} sectionID={sectionID} itemID={itemID} item={item} next="sixth" onClick={_onSixthPanel}>
								<Route path="sixth" component={DetailsPanel} sectionID={sectionID} itemID={itemID} item={item} next="seventh" onClick={_onSeventhPanel}>
									<Route path="seventh" component={PlayerPanel} sectionID={sectionID} itemID={itemID} item={item} next="first" onClick={_onFirstPanel} />
								</Route>
							</Route>
						</Route>
						<Route path="favourites" component={FavouritesPanel} />
					</Route>
					<Route path="settings" component={SettingsPanel} />
				</Route>
			</RoutablePanels>
		);
	}
});

export default MoonstoneDecorator(
	AppStateDecorator(
		App
	)
);