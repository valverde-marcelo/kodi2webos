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
import debug from '../utils/debug';
import storage from '../utils/storage';

import { DEMO_MODE, LOCAL_STORAGE_PREFIX_SERVER } from '../utils/global';

const logger = debug('utils:utils');

function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}

function objectFixURL(object) {
    object.thumbnail = fixURL(object.thumbnail, 'image');
    object.art.fanart = fixURL(object.art.fanart, 'image');
    object.art.poster = fixURL(object.art.poster, 'image');
};

function fixURL(src, type) {
    //TODO: utilizar imagens aleatorias
    if(storage.getSync(DEMO_MODE, LOCAL_STORAGE_PREFIX_SERVER)){
        //return "https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg";
        return "https://i2.wp.com/www.adobetutorialz.com/content_images/AdobePhotoshop/ART-D/tutorial537/25.jpg?resize=650%2C520";
    }
    return `${server.protocol}://${server.ip}:${server.port}/${type}/${encodeURIComponent(src)}`;
}

async function sleep(time) {
    logger(`going to wait for ${time} miliseconds`);
    await wait(time);
    logger('finally wait is over');
}

function wait(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

function maxChar(str, n){
    if (str.length  >= n) {
        return `${str.substr(0, n)}...`;
    } else {
        return str;
    }
}

export default {
    isObject,
    objectFixURL,
    sleep,
    maxChar
}