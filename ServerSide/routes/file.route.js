"use strict";

const
    express = require('express'),
    router = express.Router(),
    FileController = require('../controllers/file.controller');

    router.post('/',FileController.upload);

module.exports = function(app){
    app.use('/api/file',router);
}