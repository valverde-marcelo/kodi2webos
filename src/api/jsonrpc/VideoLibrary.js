/*
 * File: VideoLibrary.js
 * Project: kodi2webos
 * File Created: Tuesday, 19th May 2020 6:20:23 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:29:53 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import { generate as uuid } from "shortid";

const defaultProperties = [
    'art',
    'director',
    'file',
    'mpaa',
    'originaltitle',
    'premiered',
    'plot',
    'plotoutline',
    'rating',
    'ratings',
    'resume',
    'streamdetails',
    'tagline',
    'title',
    'thumbnail',
    'writer',
    'year'
];

const getMoviesInProgress = (start, end) => {

    let message = {
        id: uuid(),
        jsonrpc: '2.0',
        method: "VideoLibrary.GetMovies",
        params: {}
    };

    let params = {
        limits: {
            start: start,
            end: end
        },
        filter: {
            field: 'inprogress',
            operator: 'true',
            value: 'value'
        },
        sort: {
            order: 'descending',
            method: 'lastplayed'
        },
        properties: defaultProperties
    };

    message.params = params;

    return message;
}

const getMoviesLastAdded = (start, end) => {

    let message = {
        id: uuid(),
        jsonrpc: '2.0',
        method: "VideoLibrary.GetMovies",
        params: {}
    };

    let params = {
        limits: {
            start: start,
            end: end
        },
        filter: {
            field: 'playcount',
            operator: 'is',
            value: '0'
        },
        sort: {
            order: 'descending',
            method: 'dateadded'
        },
        properties: defaultProperties
    };

    message.params = params;

    return message;
}

const getMoviesLastViewed = (start, end) => {

    let message = {
        id: uuid(),
        jsonrpc: '2.0',
        method: "VideoLibrary.GetMovies",
        params: {}
    };

    let params = {
        limits: {
            start: start,
            end: end
        },
        filter: {
            field: 'playcount',
            operator: 'isnot',
            value: '0'
        },
        sort: {
            order: 'descending',
            method: 'lastplayed'
        },
        properties: defaultProperties
    };

    message.params = params;

    return message;
}

export default { 
    getMoviesInProgress,
    getMoviesLastAdded,
    getMoviesLastViewed
}