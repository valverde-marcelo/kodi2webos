import kind from '@enact/core/kind';
import Repeater from '@enact/ui/Repeater';
import PropTypes from 'prop-types';
import React from 'react';

import Item from './Item';
//import css from './Item.module.less';


const List = kind({
    name: 'List',

    propTypes: {
        //TODO: incluir titulo e descrição da lista, horizontal ou vertical
        items: PropTypes.array,
        sectionID: PropTypes.number,
        selectedItemID: PropTypes.string,
        theme: PropTypes.string,
        onSelect: PropTypes.func,
    },


    render: ({ items, theme, sectionID, selectedItemID, onSelect}) => {

        console.log("List - entrou no render");
        //console.log(rest);

        // propriedade indexProp assinala qual a propriedade do componente filho será utilizada como índice
        // indexProp="index"

        // propriedade itemProps contém o conjunto de props a serem passadas para cada childComponent do Repeater
        // itemProps={{ onSelect: onSelectItem, theme: "sun" }

        return (
                <Repeater
                    childComponent={Item}
                    indexProp="itemID"
                    itemProps={{ theme, sectionID, selectedItemID, onSelect }}
                >
                    {items}
                </Repeater>
        );
    }
});

export default List;