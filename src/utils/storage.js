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

const asyncStorage = localforage.createInstance({
  name: 'kodi2webosAssync',
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

function setSync(key, value) {
  localStorage[key] = JSON.stringify(value);
}

function setSyncRaw(key, value) {
  localStorage[key] = value;
}

function getSync(key, value) {
  if(!(key in localStorage)) {
    return null;
  }

  return JSON.parse(localStorage[key]);
}

function clearSync() {
  localStorage.clear();
}

export default {
  set,
  get,
  clear,
  setSync,
  getSync,
  clearSync
}
