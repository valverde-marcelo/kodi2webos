/*
 * File: mock.js
 * Project: kodi2webos
 * File Created: Monday, 8th June 2020 7:13:58 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:17:16 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import utils from '../utils/utils';
import debug from '../utils/debug';
import { MOCK_MOVIE, MOCK_URL_VIDEO } from './mock-data';
import {generate as uuid} from 'shortid';
import { STEP } from '../utils/global';

const logger = debug('api:mock');

function createMockData(mock, length) {
    let data = [];
    for (let i = 0; i < length; i++) {
        data.push(mock(uuid()));
    }
    return data;
}

/**
 * Métodos MOCK - devem ter a mesma assinatura e retornar o mesmo tipo que api/index
 */

function noConfig() {
    logger("check config server");
    return false;
}

const noConnection = async () => {
    logger("check connection server");
    await utils.sleep(STEP);
    return false;
}

const getMoviesInProgress = async (start, end) => {
    logger("getMoviesInProgress");
    await utils.sleep(STEP);
    let movies = createMockData(MOCK_MOVIE, end);
    return movies;
}

const getMoviesLastAdded = async (start, end) => {
    logger("getMoviesLastAdded");
    await utils.sleep(STEP);
    let movies = createMockData(MOCK_MOVIE, end);
    return movies;
}

const getMoviesLastViewed = async (start, end) => {
    logger("getMoviesLastViewed");
    await utils.sleep(STEP);
    let movies = createMockData(MOCK_MOVIE, end);
    return movies;
}

const prepareDownload = async (path) => {
    logger("prepareDownload" + {path});
    await utils.sleep(STEP);
    return MOCK_URL_VIDEO;
}

export default {
    noConfig,
    noConnection,
    getMoviesInProgress,
    getMoviesLastAdded,
    getMoviesLastViewed,
    prepareDownload
}