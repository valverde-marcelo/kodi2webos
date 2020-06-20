/*
 * File: index.js
 * Project: kodi2webos
 * File Created: Tuesday, 19th May 2020 6:19:54 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:29:44 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

/**
* export default axios.create({
   baseURL: endpoint,
   responseType: "json"
 })
*/

import axios from "axios";
import { server, endpoint, URL_BASE } from "./config";
import jsonrpc from "./jsonrpc";
import videoLibrary from "./jsonrpc/VideoLibrary";
import files from './jsonrpc/Files';

import debug from '../utils/debug';
const logger = debug('api:index');

function noConfig() {
  return (server.ip === null || server.port === null || server.protocol === null) ? true : false;
}

const noConnection = async () => {
  let message = jsonrpc.ping();
  try {
    const response = await axios.post(endpoint, message);
    logger(response.data.result);
    return false;
  } catch (error) {
    logger(error);
    return true;
  }
}

const getMoviesInProgress = async (start, end) => {
  let message = videoLibrary.getMoviesInProgress(start, end);
  try {
    const response = await axios.post(endpoint, message);
    return response.data.result.movies;
  } catch (error) {
    return error;
  }
}

const getMoviesLastAdded = async (start, end) => {
  let message = videoLibrary.getMoviesLastAdded(start, end);
  try {
    const response = await axios.post(endpoint, message);
    return response.data.result.movies;
  } catch (error) {
    return error;
  }
}

const getMoviesLastViewed = async (start, end) => {
  let message = videoLibrary.getMoviesLastViewed(start, end);
  try {
    const response = await axios.post(endpoint, message);
    return response.data.result.movies;
  } catch (error) {
    return error;
  }
}

const prepareDownload = async (path) => {
  let message = files.prepareDownload(path);
  try {
    const response = await axios.post(endpoint, message);
    const path = response.data.result.details.path;
    return `${URL_BASE}/${path}`;
  } catch (error) {
    return error;
  }
}

export default {
  noConfig,
  noConnection,
  getMoviesInProgress,
  getMoviesLastAdded,
  getMoviesLastViewed,
  prepareDownload
}