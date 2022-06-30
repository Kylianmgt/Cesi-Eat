import { WebSocketServer } from '@awesome-cordova-plugins/web-socket-server';

const ws = new WebSocketServer();

//create a websocket server and handle incomming messages and send messages 
wsserver.start(port, {
    // WebSocket Server handlers
    'onFailure': function (addr, port, reason) {
        console.log('Stopped listening on %s:%d. Reason: %s', addr, port, reason);
    },
    // WebSocket Connection handlers
    'onOpen': function (conn) {
        console.log('A user connected from %s', conn.remoteAddr);
    },
    'onMessage': function (conn, msg) {
        console.log(conn, msg); // msg can be a String (text message) or ArrayBuffer (binary message)
    },
    'onClose': function (conn, code, reason, wasClean) {
        console.log('A user disconnected from %s', conn.remoteAddr);
    },
    // Other options
    'origins': ['file://'], // validates the 'Origin' HTTP Header.
    'protocols': ['my-protocol-v1', 'my-protocol-v2'], // validates the 'Sec-WebSocket-Protocol' HTTP Header.
    'tcpNoDelay': true // disables Nagle's algorithm.
}, function onStart(addr, port) {
    console.log('Listening on %s:%d', addr, port);
}, function onDidNotStart(reason) {
    console.log('Did not start. Reason: %s', reason);
});


export default ws;

