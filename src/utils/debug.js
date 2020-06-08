import debug from 'debug';

export default function debugFactory(tag) {
  return debug(`kodi2webos:${tag}`);
}
