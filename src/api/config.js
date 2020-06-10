/*
 * File: config.js
 * Project: kodi2webos
 * File Created: Tuesday, 19th May 2020 6:28:21 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 3:29:19 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

/**
 *  UTILIZAR MÉTODO HTTP-POST
 */

const server = {
    ip: '192.168.0.4', // 'localhost' OR ipaddres
    port: 8080, //http=8080, websocket=9090
    protocol: 'http', //http|ws,
    static: false,
};


const endpoint = `${server.protocol}://${server.ip}:${server.port}/jsonrpc`;

export {
    server,
    endpoint,
}