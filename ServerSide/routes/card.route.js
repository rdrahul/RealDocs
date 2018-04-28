"use strict";

const
    express = require('express'),
    router = express.Router(),
    CardController = require('../controllers/card.controller');

router.get('/:cardId' , CardController.read);
router.post('/', CardController.create);
router.delete('/:cardId' , CardController.delete);
router.put('/:cardId' , CardController.update);

module.exports = function(app) {
    app.use('/api/cards', router);
}