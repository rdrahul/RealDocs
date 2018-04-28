'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    _ = require('lodash');

let PanSchema = new Schema({
    userId : {
        type: Schema.Types.ObjectId,
        required:true
    },
    panNumber : {
        type :String,
        required : true
    },
    Name: {
        type: String,
        trim: true,
        required: true
    },
    fatherName: {
        type: String,
        trim: true,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

/**
 * Hook a pre save method to hash the password
 */

module.exports = mongoose.model('Pan', PanSchema);