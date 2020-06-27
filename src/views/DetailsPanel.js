/*
 * File: DetailsPanel.js
 * Project: kodi2webos
 * File Created: Saturday, 2nd May 2020 10:20:37 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:23:12 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import React from 'react';
import { Panel } from '@enact/moonstone/Panels';
import Button from '@enact/moonstone/Button';
import LabeledIconButton from '@enact/moonstone/LabeledIconButton';
import IconButton from '@enact/moonstone/IconButton';
import { Ratings, Director, Writer, Duration, StreamAudioDetails, StreamSubsDetails, StreamVideoDetails } from '../components/Details';
import css from './DetailsPanel.module.less';
import debug from '../utils/debug';

const logger = debug('views:detailspanel');

//TODO: progress bar https://www.w3schools.com/howto/howto_js_progressbar.asp

function PlayResumeButton ({onClick, value}) {
	let component = null;
	
	logger(value);

	if(value) {
		if(value.position.toFixed() > 0) {
			component = <IconButton color="red"  backgroundOpacity="translucent" size="small" onClick={onClick}>resumeplay</IconButton>;
		} else {
			component = <IconButton color="red" backgroundOpacity="translucent" size="small" onClick={onClick}>play</IconButton>;
		}
	}
	
	return (component);
}

function DetailsPanel({ onClick, item, ...rest }) {
	logger('entrou Details panel');

	return (
		<Panel>
			<div className={css.content}>
				<div className={css.content__background}>
					<div className={css.content__background__shadow} />
					<div className={css.content__background__image} style={{ 'backgroundImage': `url(${item.art.fanart})` }} />
				</div>
				<div className={css.content__area}>
					<div className={css.content__area__container}>
						<div className={css.content__title}>{item.title}</div>
						<div className={css.content__subtitle}>{item.tagline}</div>
						<div className={css.content__subtitle}>({item.originaltitle})</div>
						<div className={css.content__subtitle}>{item.year} - {item.mpaa} - <Duration className={css.content__subtitle} value={item.streamdetails} /></div>
						<div className={css.content__description}>{item.plot}</div>
						<div className={css.content__description}>{item.plotoutline}</div>
						<Director className={css.content__subtitle} value={item.director} />
						<Writer className={css.content__subtitle} value={item.writer} />
						<Ratings className={css.content__subtitle} value={item.ratings} />
						<StreamVideoDetails className={css.content__subtitle} value={item.streamdetails} />
						<StreamAudioDetails className={css.content__subtitle} value={item.streamdetails} />
						<StreamSubsDetails className={css.content__subtitle} value={item.streamdetails} />
						<PlayResumeButton onClick={onClick} value={item.resume}/>
					</div>
				</div>
			</div>
		</Panel>
	);
}


export default DetailsPanel;

/*
<div className={css.content}>
	<div className={css.content__background}>
		<div className={css.content__background__shadow} />
		<div className={css.content__background__image} style={{ 'backgroundImage': `url(${details.fanart})` }} />
	</div>
	<div className={css.content__area}>
		<div className={css.content__area__container}>
			<div className={css.content__title}>{details.title}</div>
			<div className={css.content__title}>{details.tagline}</div>
			<div className={css.content__description}>{details.description}</div>
		</div>
	</div>
</div>



*/