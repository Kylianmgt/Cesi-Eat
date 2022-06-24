const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { string, required, array } = require('joi');

const menuSchema = mongoose.Schema(
  {
    restaurant: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Restaurant',
    },
    articles: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "Articles",
      required: false
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trime: true,
    },
    image: {
      type: String,
      required: false,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
menuSchema.plugin(toJSON);
menuSchema.plugin(paginate);

/**
 * @typedef Menu
 */
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
