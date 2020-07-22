/*
 * File: PlayerPanel.js
 * Project: kodi2webos
 * File Created: Sunday, 3rd May 2020 10:35:55 am
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:24:01 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

//TODO: ver exemplo do pattern-video-player (painel sobreposto, opções, altera layout conforme posição do video...)

import Button from '@enact/moonstone/Button';
import React, { useState, useEffect } from 'react';
import VideoPlayer, { MediaControls } from '@enact/moonstone/VideoPlayer';
import IconButton from '@enact/moonstone/IconButton';

import api from '../api/';

import debug from '../utils/debug';
import css from './MainPanel.module.less';

const logger = debug('views:plauerpanel');


//TODO: ao sair do video (onBack) deve parar a reprodução, caso constrario fica consumindo espaço em memoria (download em segundo plano)

function PlayerPanel({ item, fontSize, ...rest }) {
	logger("entrou PLayerPanel");
	logger(rest);

	const [source, setSource] = useState("");
	useEffect(() => {
		const fetchData = async () => {
			setSource("");
			const path = await api.prepareDownload(item.file);
			setSource(path);
		}
		fetchData();
	}, [item.file]);


	return (
		<div className={css.main} style={{fontSize:fontSize}}>
			<VideoPlayer title={item.title} poster={item.art.fanart}>
				<source src={source} type="video/mp4" />
				<infoComponents>{item.plot}</infoComponents>
				<MediaControls>
					<leftComponents><IconButton backgroundOpacity="translucent">star</IconButton></leftComponents>
					<rightComponents><IconButton backgroundOpacity="translucent">flag</IconButton></rightComponents>

					<Button backgroundOpacity="translucent">Add To Favorites</Button>
					<IconButton backgroundOpacity="translucent">search</IconButton>
				</MediaControls>
			</VideoPlayer>
		</div>
	);
}

export default PlayerPanel;
