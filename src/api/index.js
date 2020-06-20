/*
 * File: index.js
 * Project: kodi2webos
 * File Created: Tuesday, 19th May 2020 6:19:54 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Friday, 19th June 2020 5:04:49 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */


import mockAPI from './mock';
import realAPI from './real';
import storage from '../utils/storage';
import { DEMO_MODE, LOCAL_STORAGE_PREFIX_SERVER } from '../utils/global';

/**
 * CONDITIONAL EXPORT MOCK OR REAL API
 */
function exportedAPI() {
    
    if(storage.getSync(DEMO_MODE, LOCAL_STORAGE_PREFIX_SERVER) === true) {
        console.log(">>>>>>> MOCK API");
        return mockAPI
    }
    console.log("<<<<<<<<<<< REAL API");
    return realAPI;
}

const api = storage.getSync(DEMO_MODE, LOCAL_STORAGE_PREFIX_SERVER) ? mockAPI : realAPI;
//const api = exportedAPI();

export default api;