/*
 * File: utils.js
 * Project: kodi2webos
 * File Created: Monday, 8th June 2020 8:52:24 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:25:29 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import { server } from '../api/config';

function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}

function imageFixURL(movie) {
    movie.thumbnail = fixURL(movie.thumbnail, 'image');
    movie.art.fanart = fixURL(movie.art.fanart, 'image');
    movie.art.poster = fixURL(movie.art.poster, 'image');
    movie.file = fixURL(movie.file, 'vsf');
};



function fixURL(src, type) {
    //TODO: utilizar imagem local
    if(server.static){
        return "https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg";
    }
    return `${server.protocol}://${server.ip}:${server.port}/${type}/${encodeURIComponent(src)}`;
}

export default {
    isObject,
    imageFixURL,
}