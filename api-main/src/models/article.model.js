const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { string, required, array } = require('joi');

const articleSchema = mongoose.Schema(
    {
        restaurant:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:"Restaurant",
            required:true
        },
        menu:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:"Menu",
            required:false
        },
        name:{
            type:String,
            required: true,
            trim: true,
        },
        description:{
            type:String,
            required:true,
            trime:true,
        },
        image:{
            type:String,
            required:false,
            trim:true
        },
        price:{
            type:Number,
            required:true,
            trim:true
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

