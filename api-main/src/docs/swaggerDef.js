const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Cesi-Eat API documentation',
    version,
    description: 'API documentation for the Cesi-Eat API',
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
