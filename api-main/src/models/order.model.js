const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { number, allow } = require('joi');

const orderSchema = mongoose.Schema(
  {
    restaurant: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Restaurant',
      required: true,
    },
    client: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Client',
      required: true,
    },
    delivery: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Delivery',
      required: false,
    },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected', 'deliver', 'done'],
      default: 'pending',
      required: false,

    },
    menus: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Menu',
      },
    ],
    articles: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Article',
      },
    ],
    isPayed: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);
orderSchema.plugin(paginate);

/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
