import debug from 'debug';

export default function debugFactory(tag) {
  return debug(`Kodi2WebOS:${tag}`);
}
