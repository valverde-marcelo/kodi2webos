/*
 * File: ImageItem.js
 * Project: kodi2webos
 * File Created: Tuesday, 2nd June 2020 4:53:38 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:27:04 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import { Cell } from '@enact/ui/Layout';
import SlotItem from '@enact/moonstone/SlotItem';
import React from 'react';
import ri from '@enact/ui/resolution';
import debug from '../utils/debug';
import css from './ImageItem.module.less';

const logger = debug('components:imageItem');

//TODO: implementar overlay para os vistos

//{ onFocusItem, onSelectItem, sectionID, item, itemID }
function ImageItem({ onFocusItem, onSelectItem, sectionID, item, itemID, ...rest }) {
    //logger("entrou");
    
    ri.config.orientationHandling = 'scale';
    ri.init();
    const fontSize = ri.calculateFontSize().replace('px', '');
    //logger(fontSize);

    //const url = item.art.poster;
    const url = item.thumbnail;

    const scale = 0.025*fontSize;
    const w = 360;
    const h = 540;

    const width = scale*w;
    const height = scale*h;

    return (
        <Cell shrink>
            <SlotItem css={css}
                style={{'backgroundImage': `url(${url})`, 'width': `${width}px`, 'height': `${height}px`}}
                onFocus={() => (onFocusItem({ item }))}
                onClick={() => (onSelectItem({ sectionID, itemID, item }))}>
            </SlotItem>
        </Cell>


    );
}

export default ImageItem;

/* BACKUP

//width: 360px;
//height: 540px;
    

.item {
	margin: 5px;
	padding: 3px;
	height: 100%;
	background-color: whitesmoke;
}

.image{
	margin: 0 auto;
}

<Item className={css.item}
    onFocus={() => (onFocusItem({ item }))}
    onClick={() => (onSelectItem({ sectionID, itemID, item }))}>
    <Image className={css.image} src={url} sizing="fill" />
</Item>

*/