import kind from '@enact/core/kind';
import Image from '@enact/moonstone/Image';
import Item from '@enact/moonstone/Item';
import PropTypes from 'prop-types';
import React from 'react';

import css from './ImageItem.module.less';

const ImageItem = kind({
    name: 'ImageItem',

    propTypes: {
        selectedItemID: PropTypes.string, //utilizada como índice
        listID: PropTypes.string,
        theme: PropTypes.string,
        sectionID: PropTypes.number,
        onSelectItem: PropTypes.func,
        onFocusItem: PropTypes.func,
    },

    defaultProps: {
        size: 400,
        theme: 'music'
    },

    computed: {
        // Destructuring:
        // url: ({ index, size }) => {
        // url: (props) => { const index = props.index, size = props.size;

        url: ({ itemID, size, theme }) => {
            return `//loremflickr.com/${size}/${size}/${theme}?random=${itemID}`;
        },

        selected: ({ selectedItemID, itemID }) => {
            let tempID = "#" + itemID;
            if (selectedItemID === tempID) {
                return '#E509114';
            } else {
                return '#F5F5F1';
            }
        },

        sItemID: ({ itemID }) => {
            return "#" + itemID;
        },

        text: ({ sectionID }) => {
            if (sectionID === 0) {
                return "Movie";
            } else if (sectionID === 1) {
                return "TV Show";
            }
        }
    },

    render: ({ listID, selectedItemID, sItemID, sectionID, url, text, onSelectItem, selected, onFocusItem }) => {

        console.log(`Item ${sItemID}, sectionID: ${sectionID}, selectedItemID=${selectedItemID}, selected=${selected} - entrou no render`);
        //console.log(rest);

        return (
            <Item className={css.item} 
                onFocus={()=>(onFocusItem({ sectionID: sectionID, listID: listID, itemID: sItemID }))} 
                onClick={() => (onSelectItem({ sectionID: sectionID, itemID: sItemID }))}>
                <Image className={css.image} src={url} sizing="fill"/>
            </Item>
        );
    }
});

export default ImageItem;
