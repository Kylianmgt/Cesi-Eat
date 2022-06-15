const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { string, required } = require('joi');

const menu = mongoose.Schema(
    {
        name:{
            type:string,
            required: true,
            trim: true,
    }
}    
);

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
        menus :{
            type: Object,
            required: true,
            trim: true,
                    
        },
        articles: {

        }
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

