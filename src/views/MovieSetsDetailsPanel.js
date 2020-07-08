/*
 * File: MovieSetDetailsPanel.js
 * Project: kodi2webos
 * File Created: Tuesday, 7th July 2020 3:36:03 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Tuesday, 7th July 2020 3:36:07 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */


import React from 'react';
import { Column, Row, Cell } from '@enact/ui/Layout';
import Scroller from '@enact/moonstone/Scroller';
import List from '../components/List';
import Details from '../components/Details';
import utils from '../utils/utils';
import debug from '../utils/debug';
import storage from '../utils/storage';

import css from './MovieSetsDetailsPanel.module.less';

import { MOVIE_SETS_LIST_DETAILS_PREFIX, STEP } from '../utils/global';
import api from '../api';

const logger = debug('views:moviesetsdetails');

const defaultItem = {
    art: { fanart: "" },
    title: "",
    tagline: "",
    plot: "",
}

class MovieSetsDetailsPanel extends React.Component {
    constructor(props) {
        logger("entrou construtor");
        super(props);
        logger(props);

        defaultItem.art.fanart = this.props.back.art.fanart;
        defaultItem.title = this.props.back.title;
        defaultItem.tagline = "";
        defaultItem.plot = this.props.back.plot;

        const setId = this.props.back.setid;
        const index = MOVIE_SETS_LIST_DETAILS_PREFIX + setId;

        logger("INDEX NO CONSTRUTOR: " + index);

        this.state = {
            movieSetTitle: defaultItem.title,
            item: defaultItem,
            index: index,
            setId: setId
        }
    }

    async componentDidMount() {
        logger("executou componentDidMount");
        const index = this.state.index;
        const setId = this.state.setId;

        let movies = storage.getSync(index);

        //verifica se a coleção já está no localStorage
        if (movies === null) {
            logger("coleção não encontrada -> buscar no servidor");
            movies = await api.getMovieSetDetails(setId);
            storage.setSync(index, movies);
            await utils.sleep(1000);
        } else {
            logger("coleção encontrada -> usar local");
            await utils.sleep(1000);
        }
    }

    onFocusItem = ({ item }) => {
        logger("chamou o onFocusItem");
        logger(item);
        this.setState({ item: item });
    }

    render() {
        logger("entrou render()");
        const url = this.state.item.art.fanart;
        const item = this.state.item;
        const title = this.state.movieSetTitle;
        const index = this.state.index;

        logger("INDEX: " + index);

        const { onChangeSection, onSettingsPanel, sectionID, ...rest } = Object.assign({}, this.props);

       return (
            <Column className={css.main} style={{ 'backgroundImage': `url(${url})` }}>
                <Cell size={'40vh'}>
                    <div><ContainerTop title={title} item={item} /></div>
                </Cell>
                <Cell size={'60vh'}>
                    <ContainerBottom index={index} onFocusItem={this.onFocusItem} sectionID={sectionID} {...rest} />
                </Cell>
            </Column>
        );
    }
}

export default MovieSetsDetailsPanel;

function ContainerTop({ title, item }) {
    logger("entrou ContainerTop");
    //logger(item);
    return (
        <div className={css.content}>
            <div className={css.containerTitle}><span className={css.title}>Collection: {title}</span></div>
            <Details item={item} />
        </div>
    );
}

function ContainerBottom({ index, ...rest }) {
    logger("entrou ContainerBottom");
    
    //delete rest.item;
    //delete rest.itemID;

    return (
        <Scroller direction="vertical" verticalScrollbar="hidden">
            <Cell className={css.verticallist} >
                <List listID={index} title="" {...rest} />
            </Cell>
        </Scroller>
    );
}