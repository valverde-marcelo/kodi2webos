import { server } from '../api/config';

function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}

function imageFixURL(movie) {
    movie.thumbnail = fixURL(movie.thumbnail, 'image');
    movie.art.fanart = fixURL(movie.art.fanart, 'image');
    movie.art.poster = fixURL(movie.art.poster, 'image');
    movie.file = fixURL(movie.file, 'vsf');
};



function fixURL(src, type) {
    //TODO: utilizar imagem local
    if(server.static){
        return "https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg";
    }
    return `${server.protocol}://${server.ip}:${server.port}/${type}/${encodeURIComponent(src)}`;
}

export default {
    isObject,
    imageFixURL,
}