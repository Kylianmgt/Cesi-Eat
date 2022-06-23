const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { string, required, array, allow } = require('joi');

const articleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: false,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            trim: true
        }
    }
);



// add plugin that converts mongoose to json
articleSchema.plugin(toJSON);
articleSchema.plugin(paginate);

/**
 * @typedef Article
 */
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

