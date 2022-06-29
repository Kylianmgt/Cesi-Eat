
// const websockets = require('websockets');

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const userController = require('./controllers/user.controller')

// var WebSocketServer = require("ws").Server;


let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
    const io = require('socket.io')(server, {
      allowEIO3: true,
      cors: {
        origin: "http://cesi-eats.de",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "X-Socket-ID"],
        credentials: true,
      }
    });
    io.on('connection', (socket) => {
      logger.info('a user connected');
      socket.on('disconnect', () => {
        logger.info('user disconnected');
      });
      socket.on('assignDelivery', (data) => {
        logger.info(data.orderId);
        userController.updateUserOrder(action = 'accept', orderId = data.orderId, deliveryId = data.deliveryId);
        socket.emit('ordersupdated');
      }
      );

      socket.on('markOrderAsTaken', (data) => {
        logger.info(data);
        userController.updateUserOrder('take-from-restaurant', data.orderId);
        socket.emit('ordersupdated');

      }
      );

      socket.on('markOrderAsDone', (data) => {
        logger.info(data);
        userController.updateUserOrder('deliver', data.orderId);
        socket.emit('ordersupdated');

      }
      );
    });


  });







  // var wss = new WebSocketServer({ port: 7007 });
  // logger.info('WebSocketServer started');
  // wss.broadcast = function broadcastMsg(msg) {
  //   wss.clients.forEach(function each(client) {
  //     client.send(msg);
  //   });
  // };
  // wss.on('connection', function connection(ws) {
  //   var remoteIp = ws.upgradeReq.connection.remoteAddress;
  //   logger.info('WebSocketServer connection from ' + remoteIp);
  //   ws.on('message', function incoming(message) {
  //     logger.info('WebSocketServer received: ' + message);
  //     wss.broadcast(message);
  //   }
  //   );
  // });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
