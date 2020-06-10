/*
 * File: Details.js
 * Project: kodi2webos
 * File Created: Tuesday, 2nd June 2020 7:39:57 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:26:38 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

//import css from './ImageItem.module.less';
import css from './Details.module.less';




const Details = kind({
    name: 'Details',

    propTypes: {
        item: PropTypes.object,
    },

    defaultProps: {

    },

    computed: {

    },

    render: ({item}) => {

        return (
            <div className={css.content}>
                <div className={css.content__background}>
                    <div className={css.content__background__shadow} />
                    <div className={css.content__background__image} style={{ 'backgroundImage': `url(${item.imageBg})` }} />
                </div>
                <div className={css.content__area}>
                    <div className={css.content__area__container}>
                        <div className={css.content__title}>{item.title}</div>
                        <div className={css.content__description}>{item.description}</div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Details;
