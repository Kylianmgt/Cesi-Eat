let io;

module.exports = {
    init: (server) => {
        io = require('socket.io')(server, {
            allowEIO3: true,

            methods: ["GET", "POST"],
            allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "X-Socket-ID"],
            cors: {
                origin: '*',
            },
            credentials: false,
            forceNew: true,
            credentials: false
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