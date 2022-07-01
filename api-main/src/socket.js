let io;

module.exports = {
    init: (server) => {
        io = require('socket.io')(server, {
            allowEIO3: true,
            cors: {
                origin: '*',
            }
        });
        return io;
    },
    get: () => {
        if (!io) {
            throw new Error("socket is not initialized");
        }
        return io;
    }
};