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
import MovieSetsPanel from '../views/MovieSetsPanel';
import MovieSetsDetailsPanel from '../views/MovieSetsDetailsPanel';

import { SECTION_FAVOURITES, SECTION_MOVIE_SETS } from '../utils/global';

import ri from '@enact/ui/resolution';

import debug from '../utils/debug';
import css from './App.module.less';

const logger = debug('App:App');

const RoutablePanels = Routable({ navigate: 'onBack' }, Panels);

const App = kind({
	name: 'App',

	propTypes: {
		path: PropTypes.string,
		item: PropTypes.object,
		sectionID: PropTypes.number,
	},

	handlers: {

			_onChangeSection: ({ data: section, selected: sectionID }, { onNavigate, onChangeSection }) => {
			console.log("App - chamou o _onChangeSection: " + section + " - " + sectionID);
			switch (section) {
				case SECTION_FAVOURITES:
					return onNavigate({ path: '/loading/first/favourites', sectionID });

				case SECTION_MOVIE_SETS:
					return onNavigate({ path: '/loading/first/moviesets', sectionID });

				default:
					return onChangeSection({ path: '/loading/first', sectionID });
			}
		},


	
		_onSelectItem: ({ sectionID, itemID, item }, { onNavigate }) => {
			logger("chamou o _onSelectItem: " + itemID + " " + sectionID);
			if (sectionID === 0) {
				return onNavigate({ path: '/loading/first/second', sectionID, itemID, item })
			} else if (sectionID === 1) {
				return onNavigate({ path: '/loading/first/fourth', sectionID, itemID, item })
			}
		},

		
		_onSelectMovieSet: ({ sectionID, itemID, item }, { onNavigate }) => {
			logger("chamou _onSelectMovieSet")
			return onNavigate({ path: '/loading/first/moviesets/moviesetsdetails', sectionID, itemID, item, back:item })
		},

		
		_onBack: ({ path }, { onNavigate, itemID, item, sectionID, back }) => {
			console.log(`App - chamou o _onBack: path=${path}, sectionID=${sectionID}, itemID=${itemID}`);
			return onNavigate({ path, sectionID, itemID, item, back })
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

		_onMovieSetDetails: ({ sectionID, itemID, item }, { onNavigate, back }) => {
			logger("chamou _onMovieSetDetails");
			return onNavigate({ path: '/loading/first/moviesets/moviesetsdetails/details', sectionID, itemID, item, back })
		},

		_onMovieSetDetailsPlayer: (ev, { onNavigate, itemID, item, sectionID }) => {
			logger("chamou _onMovieSetDetailsPlayer")
			return onNavigate({ path: '/loading/first/moviesets/moviesetsdetails/details/player', sectionID, itemID, item })
		},

		
		_onFirstPanel: (ev, { onNavigate, item, sectionID }) => {
			return onNavigate({ path: '/loading/first', sectionID, item })
		},

		_onSecondPanel: (ev, { onNavigate, item, sectionID }) => {
			return onNavigate({ path: '/loading/first/second', sectionID, item })
		},

		_onThirdPanel: (ev, { onNavigate, itemID, item, sectionID }) => {
			return onNavigate({ path: '/loading/first/second/third', sectionID, itemID, item })
		},

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

	render: ({ _onChangeSection,
				_onSelectItem,
				_onSelectMovieSet,
				_onFirstPanel,
				_onSecondPanel,
				_onThirdPanel,
				_onFifthPanel,
				_onSixthPanel,
				_onSeventhPanel,
				_onSettingsPanel,
				_onMovieSetDetails,
				_onMovieSetDetailsPlayer,
				_onBack,
				path, itemID, item, sectionID, back, 
				...rest }) => {
		
					logger(`entrou no render: path=${path}, sectionID=${sectionID}, itemID=${item}`);

		delete rest.onInitConfig;
		delete rest.onNavigate;
		delete rest.onChangeSection;
		delete rest._onLoadingPanel;
		delete rest._onFavouritesPanel;

		ri.config.orientationHandling = 'scale';
		ri.init();

		logger(ri);

		const fontSize = '16px';
		logger(fontSize);

		return (
			<RoutablePanels className={css.app} {...rest} arranger={SlideLeftArranger} onBack={_onBack} path={path} noCloseButton>
				<Route path="loading" component={LoadingPanel} next="first" onFirstPanel={_onFirstPanel} onSettingsPanel={_onSettingsPanel}>
					<Route path="first" component={MainPanel} fontSize={fontSize} sectionID={sectionID} itemID={itemID} item={item} next="second" onChangeSection={_onChangeSection} onSelectItem={_onSelectItem} onSettingsPanel={_onSettingsPanel}>
						<Route path="second" component={DetailsPanel} fontSize={fontSize} sectionID={sectionID} itemID={itemID} item={item} next="third" onClick={_onThirdPanel}>
							<Route path="third" component={PlayerPanel} fontSize={fontSize}  sectionID={sectionID} itemID={itemID} item={item} next="first" onClick={_onFirstPanel} />
						</Route>
						<Route path="fourth" component={SeasonsPanel} fontSize={fontSize} sectionID={sectionID} itemID={itemID} item={item} next="fifth" onClick={_onFifthPanel}>
							<Route path="fifth" component={EpisodesPanel} fontSize={fontSize} sectionID={sectionID} itemID={itemID} item={item} next="sixth" onClick={_onSixthPanel}>
								<Route path="sixth" component={DetailsPanel} fontSize={fontSize} sectionID={sectionID} itemID={itemID} item={item} next="seventh" onClick={_onSeventhPanel}>
									<Route path="seventh" component={PlayerPanel} fontSize={fontSize} sectionID={sectionID} itemID={itemID} item={item} next="first" onClick={_onFirstPanel} />
								</Route>
							</Route>
						</Route>
						<Route path="moviesets" next="moviesetsdetails" component={MovieSetsPanel} fontSize={fontSize} sectionID={sectionID} itemID={itemID} item={item} onSelectItem={_onSelectMovieSet}>
							<Route path="moviesetsdetails" next="details" component={MovieSetsDetailsPanel} fontSize={fontSize} sectionID={sectionID} itemID={itemID} item={item} back={back} onSelectItem={_onMovieSetDetails}>
								<Route path="details" next="player" component={DetailsPanel} fontSize={fontSize} sectionID={sectionID} itemID={itemID} item={item} back={back} onClick={_onMovieSetDetailsPlayer}>
									<Route path="player" component={PlayerPanel} fontSize={fontSize} sectionID={sectionID} itemID={itemID} item={item}/>
								</Route>
							</Route>
						</Route>
						<Route path="favourites" component={FavouritesPanel} fontSize={fontSize}/>
					</Route>
					<Route path="settings" component={SettingsPanel} fontSize={fontSize}/>
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