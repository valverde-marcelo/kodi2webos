/* global localStorage */

import localforage from 'localforage';

const asyncStorage = localforage.createInstance({
  name: 'kodi2webosAssync'
});

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
