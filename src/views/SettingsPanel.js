/*
 * File: SettingsPanel.js
 * Project: kodi2webos
 * File Created: Sunday, 7th June 2020 9:32:04 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:24:28 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '@enact/moonstone/Button';
import { Header, Panel } from '@enact/moonstone/Panels';
import Scroller from '@enact/ui/Scroller/Scroller';

import VideoPlayer, { MediaControls } from '@enact/moonstone/VideoPlayer';
import IconButton from '@enact/moonstone/IconButton';

import { generate as uuid } from 'shortid'

import storage from '../utils/storage';
import mock from '../utils/mock';
import debug from '../utils/debug';
import utils from '../utils/utils';


const logger = debug('views:settings');

const id = uuid();

const SettingsPanel = kind({
    name: 'SettingsPanel',

    propTypes: {
        sectionID: PropTypes.number,
        itemID: PropTypes.string,
        onClick: PropTypes.func,
    },

    handlers: {
        _clearStorage: () => {
            storage.clear()
                .then(() => {
                    logger('Local storage has been cleared');
                })
                .catch(err => {
                    logger('Failed to clear storage', err);
                });

            //storage.clearSync();
        },

        _refreshData: () => {
            logger('executou _refreshData');

            storage.setSync("movies", mock.getMovies(id));

            let movies = JSON.parse(storage.getSync("movies"));
            logger(movies);


            if (utils.isObject(movies)) {
                logger("é um objeto");
                if (movies.result && movies.result.movies && Array.isArray(movies.result.movies)) {
                    logger("movies existe e é um array");
                    movies.result.movies.forEach(utils.imageFixURL);
                    logger(movies.result.movies);
                }
            }
            //storage.setSync("tv-shows", mock.getTVshows(id));
            //logger(storage.getSync("tv-shows"));
            //console.log(JSON.parse(storage.getSync("tv-shows")));

            return "";
        }
    },

    defaultProps: {
        src: "http://192.168.0.4:8080/vfs/smb%3a%2f%2fLACIE-CLOUDBOX%2fFamily%2fVideos%2fS%c3%a9ries%2fMr.%20Robot%2fMr.%20Robot%201%c2%aa%20Temporada%202015%2fS01E02%20-%20uns%20e%20zer0s.mpeg.mkv",

        bg: "http://192.168.0.4:8080/image/image%3A%2F%2Fhttp%253a%252f%252fimage.tmdb.org%252ft%252fp%252foriginal%252fmvUvfgoN5U9U3riyqRXHiswtDGo.jpg%2F",
    },


    render: ({ src, bg, sectionID, itemID, onClick, text, _clearStorage, _refreshData, ...rest }) => {
        logger("entrou no render");
        return (
            <Panel {...rest}>
                <Header type="compact" title={`Settings Panel`} />
                <div>
                    <Scroller>
                        <Button onClick={onClick}>Go to Home</Button>
                        <Button onClick={_refreshData}>Refresh data</Button>
                        <Button onClick={_clearStorage}>Clear local storage</Button>
                    </Scroller>

                    <VideoPlayer title="Hilarious Cat Video" poster={bg}>
                        <source src={src} type="video/mp4" />
                        <infoComponents>A video about my cat Boots, wearing boots.</infoComponents>
                        <MediaControls>
                            <leftComponents><IconButton backgroundOpacity="translucent">star</IconButton></leftComponents>
                            <rightComponents><IconButton backgroundOpacity="translucent">flag</IconButton></rightComponents>

                            <Button backgroundOpacity="translucent">Add To Favorites</Button>
                            <IconButton backgroundOpacity="translucent">search</IconButton>
                        </MediaControls>
                    </VideoPlayer>
                </div>
            </Panel>
        );
    }
});

export default SettingsPanel;
