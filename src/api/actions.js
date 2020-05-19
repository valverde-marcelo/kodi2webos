import axios from "axios";
import { endpoint } from "./config";
import { getMovies } from "./VideoLibrary";


const GetMovies = async (start, end) => {
    let message = getMovies(start, end);

    console.log(endpoint);
    console.log(message)

    try {
        const response = await axios.post(endpoint, message);
        console.log('👉 Returned data:', response);
    } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
    }

}

export { GetMovies };