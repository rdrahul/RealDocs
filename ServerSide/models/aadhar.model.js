'use strict';
const
mongoose = require('mongoose'),
Schema = mongoose.Schema,
_ = require('lodash');

let AadharSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        required: true
    },
    aadharNo:{
        type: Number,
        required: true,
        unique:true
    },
    name:{
        type:String,
        trim:true
    },
    dob:{
        type:Date
    },
    gender:{
        type: String,
        enum:['male','female']
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: Number
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
module.exports = mongoose.model('Aadhar',AadharSchema);
