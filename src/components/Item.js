/*
 * File: Item.js
 * Project: kodi2webos
 * File Created: Monday, 11th May 2020 2:28:25 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:27:19 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import kind from '@enact/core/kind';
import GridListImageItem from '@enact/moonstone/GridListImageItem';
import PropTypes from 'prop-types';
import React from 'react';

import css from './Item.module.less';

const SelectionOverlay = kind({
    render: () => <div className={css.selected}>Item selected</div>
});

const Item = kind({
    name: 'Item',

    propTypes: {
        selectedItemID: PropTypes.string, //utilizada como índice
        theme: PropTypes.string,
        sectionID: PropTypes.number,
        onSelect: PropTypes.func,
    },

    defaultProps: {
        size: 300,
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
                return true;
            } else {
                return false;
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

    render: ({ selectedItemID, sItemID, sectionID, url, text, onSelect, selected }) => {

        console.log(`Item ${sItemID}, sectionID: ${sectionID}, selectedItemID=${selectedItemID}, selected=${selected} - entrou no render`);
        //console.log(rest);

        return (
            <GridListImageItem className={css.item}
                caption={`${text} caption: ${sItemID}`}
                source={url}
                subCaption={`${text} caption: ${sItemID}`}
                selectionOverlayShowing={selected}
                selectionOverlay={SelectionOverlay}
                
                onClick={() => (onSelect({ sectionID: sectionID, itemID: sItemID }))}
                //onClick={onSelect}
            />
        );
    }
});

export default Item;
//TODO: fix JSX props should not use arrow functions react/jsx-no-bind
//onClick={() => (onSelect({ sectionID: sectionID, itemID: sItemID }))}