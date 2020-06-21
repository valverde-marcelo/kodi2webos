/*
 * File: List.js
 * Project: kodi2webos
 * File Created: Monday, 11th May 2020 3:54:34 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:27:34 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import React from 'react';
import ImageItem from './ImageItem';
import storage from '../utils/storage';
import css from './Grid.module.less';
import debug from '../utils/debug';

import {
	LABEL_MOVIES_LIST_IN_PROGRESS, LABEL_MOVIES_LIST_LAST_VIEWED, LABEL_MOVIES_LIST_LAST_ADDED,
	MOVIES_LIST_IN_PROGRESS, MOVIES_LIST_LAST_ADDED, MOVIES_LIST_LAST_VIEWED
} from '../utils/global';

const logger = debug('components:grid');

function GridList({ items, ...rest }) {
    logger("entrou no GridList");
    logger(rest);

    let content = "";

    if (items && items.length > 0) {
        content = items.map((item) => <ImageItem key={item.movieid} item={item} {...rest} />);
    }

    return (<section className={css.gridList}>{content}</section>);
}

function Grid({ listID, title, ...rest }) {

    logger("entrou no render");

    //TODO: passar para lista de favoritos (pode ser filme, serie ou episodio de série, testar!?)
    const itemsA = storage.getSync(listID);
    const itemsB = storage.getSync(MOVIES_LIST_LAST_ADDED);
    const itemsC = storage.getSync(MOVIES_LIST_LAST_VIEWED);

    const items = itemsA.concat(itemsB).concat(itemsC);
    

    return (
        <GridList className={css.grid} {...rest} listID={listID} items={items} />
    );
}

export default Grid;