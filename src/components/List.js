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
import Repeater from '@enact/ui/Repeater';
import { Column, Row, Cell } from '@enact/ui/Layout';
import Scroller from '@enact/moonstone/Scroller';
import ImageItem from './ImageItem';
import css from './List.module.less';


const List = kind({
    name: 'List',

    propTypes: {
        //TODO: incluir titulo e descrição da lista, horizontal ou vertical
        listID: PropTypes.string,
        title: PropTypes.string,
        items: PropTypes.array,
        sectionID: PropTypes.number,
        selectedItemID: PropTypes.string,
        theme: PropTypes.string,
        onSelectItem: PropTypes.func,
        onFocusItem: PropTypes.func,
    },


    render: ({ listID, items, theme, sectionID, title, selectedItemID, onSelectItem, onFocusItem }) => {

        console.log("List - entrou no render");
        //console.log(rest);

        // propriedade indexProp assinala qual a propriedade do componente filho será utilizada como índice
        // indexProp="index"

        // propriedade itemProps contém o conjunto de props a serem passadas para cada childComponent do Repeater
        // itemProps={{ onSelect: onSelectItem, theme: "sun" }

        return (
            <Column className={css.list}>
                <Cell shrink>{title}</Cell>
                <Scroller id={listID} direction="horizontal" horizontalScrollbar="hidden">
                    <Repeater
                        childComponent={ImageItem}
                        indexProp="itemID"
                        itemProps={{ listID, theme, sectionID, selectedItemID, onSelectItem, onFocusItem }}
                        component={Row} //enfilera os Itens em linha
                    >
                        {items}
                    </Repeater>
                </Scroller>
            </Column>
        );
    }
});

export default List;