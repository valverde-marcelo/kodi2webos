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

const getMovies = (start, end) => {

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
        properties: [
            'art',
            'genre',
            'director',
            'trailer',
            'tagline',
            'plot',
            'plotoutline',
            'title',
            'originaltitle',
            'lastplayed',
            'runtime',
            'year',
            'playcount',
            'rating',
            'thumbnail',
            'file'
        ],
        sort: {
            method: 'sorttitle',
            ignorearticle: true
        }
    };

    message.params = params;

    return message;
};

export default { 
    getMovies 
};