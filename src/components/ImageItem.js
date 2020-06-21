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
import React from 'react';
import debug from '../utils/debug';
import utils from '../utils/utils';
import css from './ImageItem.module.less';

const logger = debug('components:imageItem');

//TODO: implementar overlay para os vistos

function ImageItem({ onFocusItem, onSelectItem, sectionID, listID, item, ...rest }) {

    //logger(item);

    let itemID = "";

    utils.objectFixURL(item);

    //TODO: id de séries pode ter outro nome, atenção!!
    if(sectionID === 0){
        itemID = item.movieid.toString();
    }

    //const url = item.art.poster;
    const url = item.thumbnail;

    return (
        <Item className={css.item}
            onFocus={() => (onFocusItem({ item }))}
            onClick={() => (onSelectItem({ sectionID, itemID, item }))}>
            <Image className={css.image} src={url} sizing="fill" />
        </Item>
    );

}

export default ImageItem;
