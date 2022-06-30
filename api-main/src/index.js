
// const websockets = require('websockets');

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const userController = require('./controllers/user.controller')
const { socketConnected } = require('./controllers/socket.controller');

// var WebSocketServer = require("ws").Server;

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
    const io = require('./socket.js').init(server);
    io.on('connection', (socket) => {
      logger.info('a user connected');
      socketConnected(socket, io);
      socket.on('disconnect', () => {
        logger.info('user disconnected');
      });
      socket.on('restaurantAccept', (data) => {
        logger.info(data.orderId);
        userController.updateUserOrder(action = 'restaurantAccept', orderId = data.orderId);
        socket.emit('ordersupdated');
      }
      );

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

