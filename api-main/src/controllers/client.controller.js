const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { clientService } = require('../services');
const logger = require('../config/logger');
const stripe = require('stripe')('sk_test_51LEAlbLhNfISaHcD8OZv3CwsgLas8yqCN08YrZUVMREgzVN0XdjDq1cH9WC7NKlc6fexCaavX6VkZmsD9wXHU3C400eWwGJ3zL');
const endpointSecret = 'whsec_ac623eeef5178ae226579fe1853fb4f565a82f44202662ef66ca05ad67024b7e';

const getClientOrders = catchAsync(async (req, res) => {
  const orders = await clientService.getClientOrders(req.params.clientId);
  res.status(httpStatus.OK).send(orders);
});


const createOrder = catchAsync(async (req, res) => {
  const order = await clientService.createClientOrder(req.body.order);
  res.status(httpStatus.CREATED).send(order);
});

const createCheckoutSession = catchAsync(async (req, res) => {
  const createOrder = await clientService.createClientOrder(req.body.order);
  const order = await clientService.getOrderById(createOrder.id);
  logger.debug(order);
  const orderItems = (order) => {
    let orderItems = [];
    order.menus.forEach(menu => {
      orderItems.push({
        name: menu.name,
        amount: menu.price * 100,
        currency: 'eur',
        quantity: '1'
      });
    });
    order.articles.forEach(article => {
      orderItems.push({
        name: article.name,
        amount: article.price * 100,
        currency: 'eur',
        quantity: '1'
      });
    });
    return orderItems;
  }
  const session = await stripe.checkout.sessions.create({
    line_items: orderItems(order),
    mode: 'payment',
    success_url: 'https://google.fr/',
    cancel_url: 'http://localhost:8080/client/restaurants',
    metadata: {
      order_id: order.id
    }
  });
  res.send(httpStatus.OK, session);
});

const testSocket = async function () {
  const io = require('../socket.js').get();
  logger.debug('je vais laaaa')
  io.sockets.emit("paymentDone", "everyone");

}

const checkoutSessionHandler = catchAsync(async (request, response) => {
  const sig = request.headers['stripe-signature'];
  const payload = request.body;
  // logger.debug(payload);

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  }
  catch (err) {
    logger.error(err.message);
    response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    // Fulfill the purchase...
    const order = await clientService.markOrderAsPaid(session.metadata.order_id);
    testSocket();


  }
  return response.send();
});






module.exports = {
  getClientOrders,
  createOrder,
  createCheckoutSession,
  checkoutSessionHandler
};
