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

import axios from "axios";
import { endpoint } from "./config";
import videoLibrary from "./VideoLibrary";

/**
 * export default axios.create({
    baseURL: endpoint,
    responseType: "json"
  })
 */

const getMovies = async (start, end) => {
  let message = videoLibrary.getMovies(start, end);

  console.log(endpoint);
  console.log(message)

  try {
    const response = await axios.post(endpoint, message);
    console.log('👉 Returned data:', response);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }

}

export default {
  getMovies,
}