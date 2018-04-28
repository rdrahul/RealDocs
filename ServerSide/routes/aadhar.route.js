"use strict";

const
    express = require('express'),
    router = express.Router(),
    AadharController = require('../controllers/aadhar.controller');

    router.post('/',AadharController.post);
    router.get('/:AadharId',AadharController.get);
    router.put('/:AadharId',AadharController.put);
    router.delete('/:AadharId',AadharController.delete);

module.exports = function(app){
    app.use('/api/aadhar',router);
}