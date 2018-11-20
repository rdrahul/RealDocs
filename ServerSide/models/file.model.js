'use strict';
const
mongoose = require('mongoose'),
Schema = mongoose.Schema,
_ = require('lodash');

let FileSchema = new Schema({
    fileId:{
        type: Schema.Types.ObjectId,
        required: true
    },
    name:{
        type:String,
        required: true,
        unique:true
    },
    url:{
        type:String,
        required: true,
        unique:true
    },
    status:{
        type: Boolean,
        default: 1
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
module.exports = mongoose.model('File',FileSchema);
