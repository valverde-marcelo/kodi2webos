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

import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import { Column, Row, Cell } from '@enact/ui/Layout';
import Scroller from '@enact/moonstone/Scroller';
import ImageItem from './ImageItem';
import storage from '../utils/storage';
import css from './List.module.less';
import debug from '../utils/debug';
import utils from '../utils/utils';

const logger = debug('components:list');


function HorizontalList({ items, ...rest }) {
    logger("entrou no HorizontalList");
    //logger(items);

    delete rest.item; //remover, será passado ao ImageItem abaixo
    delete rest.itemID; //remover, será passado ao ImageItem abaixo

    let content = "";

    if (items && items.length > 0) {

        for (let index = 0; index < items.length; index++) {
            utils.objectFixURL(items[index]);
        }

        content = items.map((item) => <ImageItem key={item.movieid} item={item} itemID={item.movieid.toString()} {...rest} />);
    }

    return (<Row>{content}</Row>);
}

function List({ listID, title, ...rest }) {
    logger("entrou no render");
    //logger(rest);

    const items = storage.getSync(listID);
    //logger(items);

    return (<Column>
                <Cell><span className={css.title}>{title}</span></Cell>
                <Scroller id={listID} direction="horizontal" horizontalScrollbar="hidden">
                    <HorizontalList items={items} {...rest} />
                </Scroller>
            </Column>
    );
}

/*



const List = kind({
    name: 'List',

    propTypes: {
        //TODO: verficar uso do selectedItemID
        listID: PropTypes.string,
        title: PropTypes.string,
        sectionID: PropTypes.number,
        selectedItemID: PropTypes.string,
        onSelectItem: PropTypes.func,
        onFocusItem: PropTypes.func,
    },


    render: ({ listID, title, ...rest}) => {

        logger("entrou no render");
        logger(rest);

        const items = storage.getSync(listID);

        return (
            <Column className={css.list}>
                <Cell shrink>{title}</Cell>
                <Scroller id={listID} direction="horizontal" horizontalScrollbar="hidden">
                    <HorizontalList {...rest} listID={listID} items={items}/>
                </Scroller>
            </Column>
        );
    }
});
*/
export default List;