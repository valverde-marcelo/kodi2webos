import Button from '@enact/moonstone/Button';
import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import Scroller from '@enact/ui/Scroller/Scroller';
import ImageList from '../components/ImageList';

import css from './MainPanel.module.less';

import {createImageItens,createRecords} from '../utils/factory';

//let items = createImageItens('movies', 10);
let movies = createRecords('movies', 5);
let tvshows = createRecords('tvshows', 50);

const MainPanel = kind({
	name: 'MainPanel',

	propTypes: {
		next: PropTypes.string,
		onClickRouteA: PropTypes.func,
		onClickRouteB: PropTypes.func,
		//title: PropTypes.string
	},

	computed: {
		//text: ({next}) => `To ${next} Panel`
	},

	render: ({onClickRouteA, onClickRouteB, ...rest}) => {
		delete rest.next;

		return (
			<div className={css.mainView}>
			<Panel {...rest}>
				<Header type="compact" title="Kodi2WebOS">
					<Button onClick={''}>Movies</Button>
					<Button onClick={''}>TV Shows</Button>
				</Header>
				<div className={css.content}>
					<Scroller className={css.scroller}>
						<div className={css.sidebar}/>
						<Button onClick={onClickRouteA}>Movie 01 - onClick</Button>
						<Button onClick={onClickRouteB}>TV Show 01 - onClick2</Button>
						<ImageList imageitems={movies} className={css.list}/>
						<ImageList imageitems={tvshows} className={css.list}/>
					</Scroller>
				</div>
			</Panel>
			</div>
		);
	}
});

export default MainPanel;

/**
 * 
<Scroller className={css.scroller}>
<Button onClick={onClickRouteA}>Movie 01 - onClick</Button>
<Button onClick={onClickRouteB}>TV Show 01 - onClick2</Button>
<ImageList imageitems={items} className={css.list}/>
</Scroller>
 */