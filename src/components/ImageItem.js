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


import Image from '@enact/moonstone/Image';
import Item from '@enact/moonstone/Item';
import {ImageDecorator} from '@enact/moonstone/Image';
import {ItemDecorator} from '@enact/moonstone/Item';
import Spottable from '@enact/spotlight/Spottable';
import SlotItem from '@enact/moonstone/SlotItem';
import React from 'react';
//import ri from '@enact/ui/resolution';
import debug from '../utils/debug';
import css from './ImageItem.module.less';

const logger = debug('components:imageItem');

//TODO: implementar overlay para os vistos

function ImageItem({ onFocusItem, onSelectItem, sectionID, item, itemID }) {
    logger("entrou");
    //const url = item.art.poster;
    const url = item.thumbnail;

    return (
        <div className={css.container}> teste </div>
        
    );

}

export default Spottable(ImageItem);

//<Image className={css.image} src={url} sizing="fill" />
//style={{'backgroundImage': `url(${url})` }}

/**
 * 
 * <SlotItem css={css}
            onFocus={() => (onFocusItem({ item }))}
            onClick={() => (onSelectItem({ sectionID, itemID, item }))}>
        </SlotItem>
 * 
 * 
 */


/* BACKUP
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