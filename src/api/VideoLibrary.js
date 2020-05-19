import { generate as uuid } from "shortid";

const getMovies = (start, end) => {

    let message = {
        id: uuid(),
        jsonrpc: '2.0',
        method: "VideoLibrary.GetMovies",
        params: {}
    };

    let params = {
        limits: {
            start: start,
            end: end
        },
        properties: [
            'art',
            'genre',
            'director',
            'trailer',
            'tagline',
            'plot',
            'plotoutline',
            'title',
            'originaltitle',
            'lastplayed',
            'runtime',
            'year',
            'playcount',
            'rating',
            'thumbnail',
            'file'
        ],
        sort: {
            method: 'sorttitle',
            ignorearticle: true
        }
    };

    message.params = params;

    return message;
};

export { getMovies };