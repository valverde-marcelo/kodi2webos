import axios from "axios";
import {endpoint} from "./config";

/**
 * 
 */

export default axios.create({
    baseURL: endpoint,
    responseType: "json"
  });