let io;

module.exports = {
    init: (server) => {
        io = require('socket.io')(server, {
            allowEIO3: true,

            methods: ["GET", "POST"],
            allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "X-Socket-ID"],
            cors: {
                origin: 'http://cesi-eats.de/',
            },
            credentials: false,
            forceNew: true,
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