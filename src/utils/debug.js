/* global localStorage */

import debug from 'debug';

localStorage.setItem('debug', 'kodi2webos:*');

export default function debugFactory(tag) {
  return debug(`kodi2webos:${tag}`);
}
