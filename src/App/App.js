import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {Panels, Routable, Route} from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';
import {SlideLeftArranger} from '@enact/ui/ViewManager';

import AppStateDecorator from './AppStateDecorator';

import MainPanel from '../views/MainPanel';
import DetailsPanel from '../views/DetailsPanel';
import PlayerPanel from '../views/PlayerPanel';
import SeasonsPanel from '../views/SeasonsPanel';
import EpisodesPanel from '../views/EpisodesPanel';

const RoutablePanels = Routable({navigate: 'onBack'}, Panels);

/**
 * Rotas:
 * 1) Main - Movies -> 2) Details -> 3) Player -> 1) Main
 * 1) Main - TV-Shows -> 4) Seasons -> 5) Episodes -> 6) Details -> 7) Player -> 1) Main
 */

const App = kind({
	name: 'App',

	propTypes: {
		onNavigate: PropTypes.func,
		path: PropTypes.string
	},

	handlers: {
		onFirstPanel: (ev, {onNavigate}) => onNavigate({path: '/first'}),
		onSecondPanel: (ev, {onNavigate}) => onNavigate({path: '/first/second'}),
		onThirdPanel: (ev, {onNavigate}) => onNavigate({path: '/first/second/third'}),
		onFourthPanel: (ev, {onNavigate}) => onNavigate({path: '/first/fourth'}),
		onFifthPanel: (ev, {onNavigate}) => onNavigate({path: '/first/fourth/fifth'}),
		onSixthPanel: (ev, {onNavigate}) => onNavigate({path: '/first/fourth/fifth/sixth'}),
		onSeventhPanel: (ev, {onNavigate}) => onNavigate({path: '/first/fourth/fifth/sixth/seventh'}),
	},

	render: ({onFirstPanel, onSecondPanel, onThirdPanel, onFourthPanel, onFifthPanel, onSixthPanel, onSeventhPanel, onNavigate, path, ...rest}) => {
		return (
			<RoutablePanels {...rest} arranger={SlideLeftArranger} onBack={onNavigate} path={path} noCloseButton>
				<Route path="first" component={MainPanel} onClickRouteA={onSecondPanel} onClickRouteB={onFourthPanel}>
					<Route path="second" component={DetailsPanel} next="third" onClick={onThirdPanel} idItem={0}>
						<Route path="third" component={PlayerPanel} next="first" onClick={onFirstPanel} />
					</Route>
					<Route path="fourth" component={SeasonsPanel} next="fifth" onClick={onFifthPanel}>
						<Route path="fifth" component={EpisodesPanel} next="sixth" onClick={onSixthPanel}>
							<Route path="sixth" component={DetailsPanel} next="seventh" onClick={onSeventhPanel}>
								<Route path="seventh" component={PlayerPanel} next="first" onClick={onFirstPanel} />
							</Route>
						</Route>
					</Route>
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