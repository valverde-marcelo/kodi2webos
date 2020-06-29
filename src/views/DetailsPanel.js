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
import IconButton from '@enact/moonstone/IconButton';
import Button from '@enact/moonstone/Button';
import { Title, LineDetails, Plot, Director, Genre, Cast } from '../components/Details';
import css from './DetailsPanel.module.less';
import debug from '../utils/debug';

const logger = debug('views:detailspanel');

//TODO: progress bar https://www.w3schools.com/howto/howto_js_progressbar.asp

function PlayResumeButton({ onClick, value }) {
	let component = null;

	logger(value);

	if (value) {
		if (value.position.toFixed() > 0) {
			component = <Button css={css} color="blue" onClick={onClick}>Resume</Button>;
		} else {
			component = <Button css={css} color="blue" onClick={onClick}>Play</Button>;
		}
	}

	return (component);
}

function DetailsPanel({ onClick, item, ...rest }) {
	logger('entrou Details panel');
	const url = item.art.fanart;

	return (<div className={css.main} style={{ 'backgroundImage': `url(${url})` }}>
				<div className={css.container}>
					<div><Title value={item.title}/></div>
					<div><LineDetails value={item} /></div>
					<div style={{width: '60vw'}}><Plot value={item.plot} /></div>
					<br />
					<div style={{width: '60vw'}}><Cast value={item.cast} /></div>
					<div style={{width: '60vw'}}><Director value={item.director} /></div>
					<div style={{width: '60vw'}}><Genre value={item.genre} /></div>
					<br />
					<PlayResumeButton onClick={onClick} value={item.resume}/>
				</div>
			</div>
	);
}


export default DetailsPanel;

/*
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
*/