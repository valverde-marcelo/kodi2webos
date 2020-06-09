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