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
import { Header, Panel } from '@enact/moonstone/Panels';
import { Column, Row, Cell } from '@enact/ui/Layout';
import React, { useState, useEffect } from 'react';
import VideoPlayer, { MediaControls } from '@enact/moonstone/VideoPlayer';
import IconButton from '@enact/moonstone/IconButton';

import api from '../api/';

import debug from '../utils/debug';

const logger = debug('views:plauerpanel');


//TODO: ao sair do video (onBack) deve parar a reprodução, caso constrario fica consumindo espaço em memoria (download em segundo plano)

function PlayerPanel({ itemID, item, onClick, ...rest }) {

	const [source, setSource] = useState("");

	useEffect(() => {
		
		const fetchData = async () => {
			setSource("");
			const path = await api.prepareDownload(item.file);
			setSource(path);
		}

		fetchData();

	}, []);


	return (
		<Panel {...rest}>
				<VideoPlayer title={item.title} poster={item.art.fanart}>
					<source src={source} type="video/mp4" />
					<infoComponents>A video about my cat Boots, wearing boots.</infoComponents>
					<MediaControls>
						<leftComponents><IconButton backgroundOpacity="translucent">star</IconButton></leftComponents>
						<rightComponents><IconButton backgroundOpacity="translucent">flag</IconButton></rightComponents>

						<Button backgroundOpacity="translucent">Add To Favorites</Button>
						<IconButton backgroundOpacity="translucent">search</IconButton>
					</MediaControls>
				</VideoPlayer>
		</Panel>
	);

}
/*
<Panel {...rest}>
			<Header type="compact" title={`Player of: ${itemID}`} />
			<Column>
				<VideoPlayer title={item.title} poster={item.art.fanart}>
					<source src={source} type="video/mp4" />
					<infoComponents>A video about my cat Boots, wearing boots.</infoComponents>
					<MediaControls>
						<leftComponents><IconButton backgroundOpacity="translucent">star</IconButton></leftComponents>
						<rightComponents><IconButton backgroundOpacity="translucent">flag</IconButton></rightComponents>

						<Button backgroundOpacity="translucent">Add To Favorites</Button>
						<IconButton backgroundOpacity="translucent">search</IconButton>
					</MediaControls>
				</VideoPlayer>
				<Button onClick={onClick}>Go to Home</Button>
			</Column>
		</Panel>
*/

export default PlayerPanel;
