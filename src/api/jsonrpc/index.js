/*
 * File: index.js
 * Project: kodi2webos
 * File Created: Wednesday, 10th June 2020 7:09:38 pm
 * Author: valverde82 (valverde.marcelo@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th June 2020 7:10:55 pm
 * Modified By: valverde82 (valverde.marcelo@gmail.com>)
 * -----
 * Copyright 2020 © VALVERDE, Marcelo Richard. All Rigths Reserved.
 */

import { generate as uuid } from "shortid";

const ping = () => {

    let message = {
        id: uuid(),
        jsonrpc: '2.0',
        method: "JSONRPC.Ping"
    };

    return message;
};

export default { 
    ping 
};