const express = require('express');
const placesRouter = express.Router();

const placesController = require('../controller/controller');

placesRouter.get('/', placesController.index);
placesRouter.post('/', placesController.create);

placesRouter.get('/:id', placesController.show);
placesRouter.put('/:id', placesController.update);
placesRouter.delete('/:id', placesController.destroy);

module.exports = placesRouter;
