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

import storage from '../utils/storage';
import {LOCAL_STORAGE_PREFIX_SERVER} from '../utils/global';

const server_ip = storage.getSync("ip", LOCAL_STORAGE_PREFIX_SERVER);
const server_port = storage.getSync("port", LOCAL_STORAGE_PREFIX_SERVER);
const server_protocol = storage.getSync("protocol", LOCAL_STORAGE_PREFIX_SERVER);

const server = {
    ip: server_ip,              //'192.168.0.4', // 'localhost' OR ipaddres
    port: server_port,          //8080, //http=8080, websocket=9090
    protocol: server_protocol,  //'http', //http|ws,
};

const endpoint = `${server.protocol}://${server.ip}:${server.port}/jsonrpc`;

const URL_BASE = `${server.protocol}://${server.ip}:${server.port}`;

export {
    server,
    endpoint,
    URL_BASE,
}