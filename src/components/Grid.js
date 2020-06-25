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

import css from './Grid.module.less';
import debug from '../utils/debug';

const logger = debug('components:grid');


function Grid({ items, ...rest }) {
    logger("entrou no GridList");
    logger(rest);

    let content = "";

    if (items && items.length > 0) {
        content = items.map((item) => <div key={item.movieid}>
                                            <ImageItem itemID={item.movieid.toString()} item={item} {...rest} />
                                        </div>);
    }

    return (<div className={css.main}>
                <section className={css.gridListTemplateColumns}>
                        {content}
                    </section>
            </div>);
}

export default Grid;