import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import Repeater from '@enact/ui/Repeater';
import { Column, Row, Cell } from '@enact/ui/Layout';
import Scroller from '@enact/moonstone/Scroller';

import Item from './Item';
import css from './List.module.less';


const List = kind({
    name: 'List',

    propTypes: {
        //TODO: incluir titulo e descrição da lista, horizontal ou vertical
        id: PropTypes.string,
        title: PropTypes.string,
        items: PropTypes.array,
        sectionID: PropTypes.number,
        selectedItemID: PropTypes.string,
        theme: PropTypes.string,
        onSelect: PropTypes.func,
    },


    render: ({ id, items, theme, sectionID, title, selectedItemID, onSelect }) => {

        console.log("List - entrou no render");
        //console.log(rest);

        // propriedade indexProp assinala qual a propriedade do componente filho será utilizada como índice
        // indexProp="index"

        // propriedade itemProps contém o conjunto de props a serem passadas para cada childComponent do Repeater
        // itemProps={{ onSelect: onSelectItem, theme: "sun" }

        return (
            <Column className={css.list}>
                <Cell shrink>{title}</Cell>
                <Scroller id={id} direction="horizontal" horizontalScrollbar="hidden">
                    <Cell size="40%">
                        <Repeater
                            childComponent={Item}
                            indexProp="itemID"
                            itemProps={{ theme, sectionID, selectedItemID, onSelect }}
                            component={Row}
                        >
                            {items}
                        </Repeater>
                    </Cell>
                </Scroller>
            </Column>

        );
    }
});

export default List;