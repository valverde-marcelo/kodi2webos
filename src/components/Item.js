import kind from '@enact/core/kind';
import GridListImageItem from '@enact/moonstone/GridListImageItem';
import PropTypes from 'prop-types';
import React from 'react';

import css from './Item.module.less';

const Item = kind({
    name: 'Item',

    propTypes: {
        index: PropTypes.number, //utilizada como índice
        theme: PropTypes.string,
        type: PropTypes.string,
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

        url: ({ index, size, theme }) => {
            return `//loremflickr.com/${size}/${size}/${theme}?random=${index}`;
        }
    },

    render: ({ index, type, url, onSelect }) => {

        console.log(`Item ${index}- entrou no render`);
        //console.log(rest);

        return (
            <GridListImageItem
                caption={"caption: " + index}
                source={url}
                subCaption={"subcaptio: " + index}

                onClick={() => (onSelect(index, type))}
            />
        );
    }
});

export default Item;