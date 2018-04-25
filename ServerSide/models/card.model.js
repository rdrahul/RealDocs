'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    _ = require('lodash');

let UserSchema = new Schema({
    
    cardType : {
        type :String ,
        enum: ['debit', 'credit'],
        required : true
    },
    bankName: {
        type: String,
        trim: true,
        required: true
    },
    cardNo: {
        type: Number,
        required: true,
        unique: true   
    },
    nameOnCard:{
        type: String,
        trim: true,
        required: true
    },
    cvv:{
        type: Number,
        length: 3
    },
    validFrom:{
        type: Date
    },
    expiry:{
        type: Date
    }
});

/**
 * Hook a pre save method to hash the password
 */

module.exports = mongoose.model('Card', CardSchema);