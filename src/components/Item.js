import kind from '@enact/core/kind';
import GridListImageItem from '@enact/moonstone/GridListImageItem';
import PropTypes from 'prop-types';
import React from 'react';

import css from './Item.module.less';

const Item = kind({
    name: 'Item',

    propTypes: {
        itemID: PropTypes.number, //utilizada como índice
        theme: PropTypes.string,
        sectionID: PropTypes.number,
        onSelect: PropTypes.func,
    },

    defaultProps: {
        size: 300,
        theme: 'music'
    },

    styles: {
        css,
        className: 'item'
    },

    handlers: {
    },

    computed: {
        // Destructuring:
        // url: ({ index, size }) => {
        // url: (props) => { const index = props.index, size = props.size;

        url: ({ itemID, size, theme }) => {
            return `//loremflickr.com/${size}/${size}/${theme}?random=${itemID}`;
        }
    },

    render: ({ itemID, sectionID, url, onSelect }) => {

        console.log(`Item ${itemID}, sectionID: ${sectionID} - entrou no render`);
        //console.log(rest);

        let sItemID= "#" + itemID;

        return (
            <GridListImageItem
                caption={"caption: " + sItemID}
                source={url}
                subCaption={"subcaptio: " + sItemID}

                onClick={() => (onSelect({sectionID:sectionID, itemID:sItemID}))}
            />
        );
    }
});

export default Item;