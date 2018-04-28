"use strict";

const
    express = require('express'),
    router = express.Router(),
    PanController = require('../controllers/pan.controller');

router.post('/',PanController.create);
router.get('/:panId',PanController.get);
router.put('/:panId',PanController.update);
router.delete('/:panId',PanController.delete);

module.exports = function(app){
    app.use('/api/pan',router);
}