/* global localStorage */

/*
 * File: debug.js
 * Project: kodi2webos
 * File Created: Sunday, 7th June 2020 10:07:23 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:24:57 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import debug from 'debug';
import storage from './storage';

storage.setDebugModeOn();

//localStorage.setItem('debug', 'kodi2webos:*');

export default function debugFactory(tag) {
  return debug(`kodi2webos:${tag}`);
}
