import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

//import css from './ImageItem.module.less';
import css from './Details.module.less';
import image from '../../assets/images/bttf.jpg';

const movie = {
    imageBg: image,
    title: 'De volta para o futuro III',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim quis quam congue, non fringilla orci placerat. Praesent sollicitudin',

}

const Details = kind({
    name: 'Details',

    propTypes: {

    },

    defaultProps: {

    },

    computed: {

    },

    render: () => {

        return (
            <div className={css.content}>
                <div className={css.content__background}>
                    <div className={css.content__background__shadow} />
                    <div className={css.content__background__image} style={{ 'background-image': `url(${movie.imageBg})` }} />
                </div>
                <div className={css.content__area}>
                    <div className={css.content__area__container}>
                        <div className={css.content__title}>{movie.title}</div>
                        <div className={css.content__description}>{movie.description}</div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Details;
