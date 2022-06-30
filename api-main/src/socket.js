let io;

module.exports = {
    init: (server) => {
        io = require('socket.io')(server, {
            allowEIO3: true,
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
                allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "X-Socket-ID"],
                credentials: true,
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