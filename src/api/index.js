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