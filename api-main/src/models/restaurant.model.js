const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { string, required } = require('joi');

const restaurantSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    zipCode: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    rating: {
      type: Number,
      required: false,
    },

    image: {
      type: String,
      required: false,
    },
    menus:[{
      type: mongoose.SchemaTypes.ObjectId, ref: 'Menu' 
    }],
    articles:[{
      type: mongoose.SchemaTypes.ObjectId, ref: 'Article' 
    }]
  },
  
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
restaurantSchema.plugin(toJSON);
restaurantSchema.plugin(paginate);

/**
 * @typedef Restaurant
 */
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
