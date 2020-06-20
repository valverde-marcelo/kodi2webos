/* global localStorage */

/*
 * File: storage.js
 * Project: kodi2webos
 * File Created: Sunday, 7th June 2020 9:20:52 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:25:19 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import localforage from 'localforage';
import {LOCAL_STORAGE_PREFIX_ASYNC, LOCAL_STORAGE_PREFIX_DATA} from '../utils/global';

//const prefix = "kodi2webos:data:";

const asyncStorage = localforage.createInstance({
  name: LOCAL_STORAGE_PREFIX_ASYNC,
  driver: localforage.LOCALSTORAGE, //define qual drive será utilizado
});

// This will use a different driver order.
/*
localforage.config({
  driver: [localforage.WEBSQL,
           localforage.INDEXEDDB,
           localforage.LOCALSTORAGE],
  name: 'WebSQL-Rox'
});
*/

function set(key, value) {
  return asyncStorage.setItem(key, value);
}

function get(key) {
  return asyncStorage.getItem(key);
}

function clear() {
  return asyncStorage.clear();
}

function setSync(key, value, prefix = LOCAL_STORAGE_PREFIX_DATA) {
  key = prefix+key;
  localStorage[key] = JSON.stringify(value);
}

function setSyncRaw(key, value, prefix = LOCAL_STORAGE_PREFIX_DATA) {
  key = prefix+key;
  localStorage[key] = value;
}

function getSync(key, prefix = LOCAL_STORAGE_PREFIX_DATA) {
  key = prefix+key;
  if(!(key in localStorage)) {
    return null;
  }

  return JSON.parse(localStorage[key]);
}

function clearSync(prefix = LOCAL_STORAGE_PREFIX_DATA) {
  for(let key in localStorage) {
    if(key.startsWith(prefix)){
      localStorage.removeItem(key);
    }
  }
}

export default {
  set,
  get,
  clear,
  setSync,
  getSync,
  clearSync
}
